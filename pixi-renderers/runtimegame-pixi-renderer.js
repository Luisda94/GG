var gdjs;

(function (l) {
    const u = new l.Logger("PIXI game renderer"),
        f = [37, 38, 39, 40];

    class R {
        constructor(e, t) {
            this._isFullPage = true;
            this._isFullscreen = false;
            this._pixiRenderer = null;
            this._threeRenderer = null;
            this._gameCanvas = null;
            this._domElementsContainer = null;
            this._canvasWidth = 0;
            this._canvasHeight = 0;
            this._keepRatio = true;
            this._nextFrameId = 0;
            this._wasDisposed = false;
            
            this.getElectronRemote = () => {
                if (typeof require === "function") {
                    const e = this._game.getAdditionalOptions(),
                        t = e && e.electronRemoteRequirePath ? e.electronRemoteRequirePath : "@electron/remote";
                    try {
                        return require(t);
                    } catch (i) {
                        console.error(`Could not load @electron/remote from "${t}". Error is:`, i);
                    }
                }
                return null;
            };
            
            this._game = e;
            this._forceFullscreen = t;
            this._marginLeft = this._marginTop = this._marginRight = this._marginBottom = 0;
            this._setupOrientation();
        }

        createStandardCanvas(e) {
            this._throwIfDisposed();
            const t = document.createElement("canvas");
            e.appendChild(t);
            this.initializeRenderers(t);
            this.initializeCanvas(t);
        }

        initializeRenderers(e) {
            this._throwIfDisposed();
            if (typeof THREE !== "undefined") {
                this._threeRenderer = new THREE.WebGLRenderer({
                    canvas: e,
                    antialias: this._game.getAntialiasingMode() !== "none" &&
                        (this._game.isAntialisingEnabledOnMobile() || !l.evtTools.common.isMobile()),
                    preserveDrawingBuffer: true
                });
                this._threeRenderer.useLegacyLights = true;
                this._threeRenderer.autoClear = false;
                this._threeRenderer.setSize(this._game.getGameResolutionWidth(), this._game.getGameResolutionHeight());
                
                this._pixiRenderer = new PIXI.Renderer({
                    width: this._game.getGameResolutionWidth(),
                    height: this._game.getGameResolutionHeight(),
                    view: e,
                    context: this._threeRenderer.getContext(),
                    clearBeforeRender: false,
                    preserveDrawingBuffer: true,
                    antialias: false,
                    backgroundAlpha: 0
                });
            } else {
                this._pixiRenderer = PIXI.autoDetectRenderer({
                    width: this._game.getGameResolutionWidth(),
                    height: this._game.getGameResolutionHeight(),
                    view: e,
                    preserveDrawingBuffer: true,
                    antialias: false
                });
            }
            
            this._pixiRenderer.plugins.accessibility.destroy();
            delete this._pixiRenderer.plugins.accessibility;
        }

        initializeCanvas(e) {
            this._gameCanvas = e;
            e.style.position = "absolute";
            e.tabIndex = 1;
            e.style.userSelect = "none";
            e.style.outline = "none";
            
            const t = document.createElement("div");
            t.style.position = "absolute";
            t.style.overflow = "hidden";
            t.style.outline = "none";
            t.style.pointerEvents = "none";
            t.addEventListener("scroll", i => {
                t.scrollLeft = 0;
                t.scrollTop = 0;
                i.preventDefault();
            });
            
            e.addEventListener("pointerdown", () => {
                e.focus();
            });
            
            t.style["-webkit-user-select"] = "none";
            e.parentNode?.appendChild(t);
            this._domElementsContainer = t;
            this._resizeCanvas();
        }

        static getWindowInnerWidth() {
            return typeof window !== "undefined" ? window.innerWidth : 800;
        }

        static getWindowInnerHeight() {
            return typeof window !== "undefined" ? window.innerHeight : 800;
        }

        _setupOrientation() {
            if (typeof window === "undefined" || !window.screen || !window.screen.orientation) return;
            const e = this._game.getGameData().properties.orientation;
            try {
                if (e === "default") {
                    const t = window.screen.orientation.unlock();
                    t && t.catch(() => {});
                } else {
                    window.screen.orientation.lock(e).catch(() => {});
                }
            } catch (t) {
                u.error("Unexpected error while setting up orientation: ", t);
            }
        }

        _resizeCanvas() {
            if (!this._pixiRenderer || !this._domElementsContainer) return;
            
            const e = this._forceFullscreen || this._isFullPage || this._isFullscreen;
            let t = this._game.getGameResolutionWidth(),
                i = this._game.getGameResolutionHeight(),
                o = window.innerWidth - this._marginLeft - this._marginRight,
                r = window.innerHeight - this._marginTop - this._marginBottom;
            
            if (o < 0) o = 0;
            if (r < 0) r = 0;
            
            if (e && !this._keepRatio) {
                t = o;
                i = r;
            } else if (e && this._keepRatio || t > o || i > r) {
                let d = o / t;
                if (i * d > r) d = r / i;
                t *= d;
                i *= d;
            }
            
            if (this._gameCanvas) {
                this._gameCanvas.style.top = this._marginTop + (r - i) / 2 + "px";
                this._gameCanvas.style.left = this._marginLeft + (o - t) / 2 + "px";
                this._gameCanvas.style.width = t + "px";
                this._gameCanvas.style.height = i + "px";
            }
        }
    }
    
    l.RuntimeGamePixiRenderer = R;
    l.RuntimeGameRenderer = R;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=runtimegame-pixi-renderer.js.map
