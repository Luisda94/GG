var gdjs;
(function (l) {
    const u = new l.Logger("PIXI game renderer"),
        f = [37, 38, 39, 40];

    class R {
        constructor(e, t) {
            this._isFullPage = !0;
            this._pixiRenderer = null;
            this._threeRenderer = null;
            this._gameCanvas = null;
            this._domElementsContainer = null;
            this._canvasWidth = 0;
            this._canvasHeight = 0;
            this._keepRatio = !0;
            this._nextFrameId = 0;
            this._wasDisposed = !1;
            this.getElectronRemote = () => {
                if (typeof require == "function") {
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
                    preserveDrawingBuffer: !0,
                });
                this._threeRenderer.useLegacyLights = !0;
                this._threeRenderer.autoClear = !1;
                this._threeRenderer.setSize(this._game.getGameResolutionWidth(), this._game.getGameResolutionHeight());

                this._pixiRenderer = new PIXI.Renderer({
                    width: this._game.getGameResolutionWidth(),
                    height: this._game.getGameResolutionHeight(),
                    view: e,
                    context: this._threeRenderer.getContext(),
                    clearBeforeRender: !1,
                    preserveDrawingBuffer: !0,
                    antialias: !1,
                    backgroundAlpha: 0,
                });
            } else {
                this._pixiRenderer = PIXI.autoDetectRenderer({
                    width: this._game.getGameResolutionWidth(),
                    height: this._game.getGameResolutionHeight(),
                    view: e,
                    preserveDrawingBuffer: !0,
                    antialias: !1,
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
            t.addEventListener("scroll", (i) => {
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
            this._game.getScaleMode() === "nearest" &&
                (e.style["image-rendering"] = "pixelated");

            this._game.getPixelsRounding() && (PIXI.settings.ROUND_PIXELS = !0);

            window.addEventListener("resize", () => {
                this._game.onWindowInnerSizeChanged();
                this._resizeCanvas();
            });

            e.focus();
        }

        static getWindowInnerWidth() {
            return typeof window != "undefined" ? window.innerWidth : 800;
        }

        static getWindowInnerHeight() {
            return typeof window != "undefined" ? window.innerHeight : 800;
        }

        updateRendererSize() {
            this._resizeCanvas();
        }

        _setupOrientation() {
            if (typeof window == "undefined" || !window.screen || !window.screen.orientation) return;
            const e = this._game.getGameData().properties.orientation;
            try {
                if (e === "default") {
                    const t = window.screen.orientation.unlock();
                    t && t.catch(() => { });
                } else window.screen.orientation.lock(e).catch(() => { });
            } catch (t) {
                u.error("Unexpected error while setting up orientation: ", t);
            }
        }

        _resizeCanvas() {
            if (!this._pixiRenderer || !this._domElementsContainer) return;

            const e = this._game.getGameResolutionWidth(),
                t = this._game.getGameResolutionHeight(),
                i = window.innerWidth,
                o = window.innerHeight;

            let newWidth = e,
                newHeight = t;

            if (i < e || o < t) {
                const scaleFactor = Math.min(i / e, o / t);
                newWidth = e * scaleFactor;
                newHeight = t * scaleFactor;
            }

            this._gameCanvas &&
                (this._gameCanvas.style.top = `${(o - newHeight) / 2}px`,
                    this._gameCanvas.style.left = `${(i - newWidth) / 2}px`,
                    this._gameCanvas.style.width = `${newWidth}px`,
                    this._gameCanvas.style.height = `${newHeight}px`);

            this._domElementsContainer.style.top = `${(o - newHeight) / 2}px`;
            this._domElementsContainer.style.left = `${(i - newWidth) / 2}px`;
            this._domElementsContainer.style.width = `${newWidth}px`;
            this._domElementsContainer.style.height = `${newHeight}px`;

            this._canvasWidth = newWidth;
            this._canvasHeight = newHeight;
        }

        setWindowSize(e, t) {
            this._throwIfDisposed();
            const i = this.getElectronRemote();
            if (i) {
                const o = i.getCurrentWindow();
                try {
                    o && o.setContentSize(e, t);
                } catch (r) {
                    u.error(`Window size setting to width ${e} and height ${t} failed. See error:`, r);
                }
            } else {
                u.warn("Window size can't be changed on this platform.");
            }
        }

        dispose(e) {
            this._pixiRenderer?.destroy();
            this._threeRenderer?.dispose();
            this._pixiRenderer = null;
            this._threeRenderer = null;
            e && this._gameCanvas && this._gameCanvas.parentNode?.removeChild(this._gameCanvas);
            this._gameCanvas = null;
            this._domElementsContainer?.parentNode?.removeChild(this._domElementsContainer);
            this._domElementsContainer = null;
            this._wasDisposed = !0;
        }
    }

    l.RuntimeGamePixiRenderer = R;
    l.RuntimeGameRenderer = R;
})(gdjs || (gdjs = {}));

//# sourceMappingURL=runtimegame-pixi-renderer.js.map
