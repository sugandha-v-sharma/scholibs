import logo from './logo.svg';
import './App.css';
import Route from "./Route.js/Route"
import "../src/css/style.css"

function App() {
  return (
    <div className="App">
      <header id="nav" class="header header-1">
        <div class="header-wrapper">
          <div class="container-m-30 clearfix">
            <div class="logo-row">
              <div class="logo-container-2">
                <div class="logo-2">
                  <a href="index.html" class="clearfix">
                    <img src="images/logo.png" class="logo-img" alt="Logo" />
                  </a>
                </div>
              </div>
              <div class="menu-btn-respons-container">
                <button
                  type="button"
                  class="navbar-toggle btn-navbar collapsed"
                  data-toggle="collapse"
                  data-target="#main-menu .navbar-collapse">
                  <span
                    aria-hidden="true"
                    class="icon_menu hamb-mob-icon"></span>
                </button>
              </div>
            </div>
          </div>

          <div class="main-menu-container" style={{ paddingRight: "10%" }}>
            <div class="container-m-30 clearfix">
              <div id="main-menu">
                <div class="navbar navbar-default" role="navigation">
                  <nav class="collapse collapsing navbar-collapse right-1024">
                    <ul class="nav navbar-nav" style={{ display: "flex" }}>
                      <li class="parent">
                        <a href="#">
                          <div
                            class="main-menu-title"
                            style={{ marginRight: "20px" }}>
                            <b>SLIDERS</b>
                          </div>
                        </a>
                        <ul class="sub">
                          <li class="parent">
                            <a href="#">Revolution Slider</a>
                            <ul class="sub">
                              <li>
                                <a href="index.html">Full Screen</a>
                              </li>
                              <li>
                                <a href="slider-revo-full-width.html">
                                  Full Width
                                </a>
                              </li>
                              <li>
                                <a href="slider-revo-kenburns.html">
                                  Kenburns Effect
                                </a>
                              </li>
                              <li>
                                <a href="slider-revo-html5-video.html">
                                  HTML5 Video
                                </a>
                              </li>
                              <li>
                                <a href="revo-slider-demo/start-here.html">
                                  All Demos <span class="label-new">new</span>
                                </a>
                              </li>
                            </ul>
                          </li>

                          <li>
                            <a href="slider-flex.html">Flex Slider</a>
                          </li>
                          <li class="parent">
                            <a href="#">Static Media</a>
                            <ul class="sub">
                              <li>
                                <a href="static-image.html">Image</a>
                              </li>
                              <li>
                                <a href="static-image-left.html">
                                  Image 2 <span class="label-new">new</span>
                                </a>
                              </li>
                              <li>
                                <a href="static-parallax.html">Parallax</a>
                              </li>
                              <li>
                                <a href="static-parallax2.html">
                                  Parallax 2 <span class="label-new">new</span>
                                </a>
                              </li>
                              <li>
                                <a href="static-text-rotator.html">
                                  Text Rotator
                                </a>
                              </li>

                              <li>
                                <a href="static-video.html">HTML5 Video</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <li class="parent">
                        <a href="#">
                          <div
                            class="main-menu-title"
                            style={{ marginRight: "20px" }}>
                            <b>PORTFOLIO</b>
                          </div>
                        </a>
                        <ul class="sub">
                          <li>
                            <a href="portfolio-grid.html">Portfolio Grid</a>
                          </li>
                          <li class="parent">
                            <a href="#">Boxed</a>
                            <ul class="sub">
                              <li>
                                <a href="portfolio-boxed-2col.html">
                                  2 Columns
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-boxed-3col.html">
                                  3 Columns
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-boxed-4col.html">
                                  4 Columns
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-boxed-5col.html">
                                  5 Columns
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li class="parent">
                            <a href="#">Boxed bordered</a>
                            <ul class="sub">
                              <li>
                                <a href="portfolio-boxed-gut-2col.html">
                                  2 Columns
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-boxed-gut-3col.html">
                                  3 Columns
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-boxed-gut-4col.html">
                                  4 Columns
                                </a>
                              </li>
                            </ul>
                          </li>{" "}
                          <li class="parent">
                            <a href="#">Wide</a>
                            <ul class="sub">
                              <li>
                                <a href="portfolio-wide-2col.html">2 Columns</a>
                              </li>
                              <li>
                                <a href="portfolio-wide-3col.html">3 Columns</a>
                              </li>
                              <li>
                                <a href="portfolio-wide-4col.html">4 Columns</a>
                              </li>
                              <li>
                                <a href="portfolio-wide-5col.html">5 Columns</a>
                              </li>
                            </ul>
                          </li>
                          <li class="parent">
                            <a href="#">Wide bordered</a>
                            <ul class="sub">
                              <li>
                                <a href="portfolio-wide-gut-2col.html">
                                  2 Columns
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-wide-gut-3col.html">
                                  3 Columns
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-wide-gut-4col.html">
                                  4 Columns
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-wide-gut-5col.html">
                                  5 Columns
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li class="parent">
                            <a href="#">Masonry</a>
                            <ul class="sub">
                              <li>
                                <a href="portfolio-masonry-2col.html">
                                  2 Columns
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-masonry-3col.html">
                                  3 Columns
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-masonry-4col.html">
                                  4 Columns
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-masonry-5col.html">
                                  5 Columns
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li class="parent">
                            <a href="#">Portfolio Single</a>
                            <ul class="sub">
                              <li>
                                <a href="portfolio-single1.html">Single 1</a>
                              </li>
                              <li>
                                <a href="portfolio-single2.html">Single 2</a>
                              </li>
                              <li>
                                <a href="portfolio-single3.html">Single 3</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <li class="parent">
                        <a href="#">
                          <div
                            class="main-menu-title"
                            style={{ marginRight: "20px" }}>
                            <b>BLOG</b>
                          </div>
                        </a>
                        <ul class="sub">
                          <li class="parent">
                            <a href="#">Blog Masonry</a>
                            <ul class="sub">
                              <li>
                                <a href="blog-masonry-2col.html">2 Columns</a>
                              </li>
                              <li>
                                <a href="blog-masonry-3col.html">3 Columns</a>
                              </li>
                              <li>
                                <a href="blog-masonry-4col.html">4 Columns</a>
                              </li>
                            </ul>
                          </li>

                          <li>
                            <a href="blog-full-width.html">Blog Full Width</a>
                          </li>

                          <li>
                            <a href="blog-small-image.html">Blog Small Image</a>
                          </li>
                          <li>
                            <a href="blog-left-sidebar.html">
                              Blog Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="blog-right-sidebar.html">
                              Blog Right Sidebar
                            </a>
                          </li>
                          <li class="parent">
                            <a href="#">Blog Single</a>
                            <ul class="sub">
                              <li>
                                <a href="blog-single-disqus.html">
                                  Disqus Comments
                                </a>
                              </li>
                              <li>
                                <a href="blog-single-facebook.html">
                                  Facebook Comments
                                </a>
                              </li>
                              <li>
                                <a href="blog-single-sidebar-right.html">
                                  Right Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="blog-single-sidebar-left.html">
                                  Left Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="blog-single-fullwidth.html">
                                  Fullwidth
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <div id="cd-search" class="cd-search">
            <form
              class="form-search"
              id="searchForm"
              action="page-search-results.html"
              method="get">
              <input
                type="text"
                value=""
                name="q"
                id="q"
                placeholder="Search..."
              />
            </form>
          </div>
        </div>
      </header>
      <div
        class="sm-img-bg2"
        style={{ backgroundImage: "url(images/static-media/laby81.jpg)" }}>
        <div
          class="container sm-content-cont sm-content-cont-660 text-center"
          style={{ paddingLeft: "16%" }}>
          <div class="sm-cont-middle">
            <div class="opacity-scroll2">
              <div class="light-72-wide sm-mb-20 sm-mt-20 mt-lg-80 color-dark">
                WE ARE <span class="bold">SCHOLIBS</span>
              </div>

              <div class="norm-16-wide hide-0-736 sm-mb-50 color-dark">
                MULTIPURPOSE ONE / MULTI PAGE POWERFUL TEMPLATE
              </div>

              <div class="center-0-478">
                {/* <a
                  class="button medium thin tp-button gray mlr-10 mb-10 smooth-scroll"
                  href="#multi-pages">
                  MULTI PAGE
                </a>
                <a
                  class="button medium thin tp-button gray mlr-10 smooth-scroll"
                  href="#one-pages">
                  ONE PAGE
                </a> */}
                {/* <input type="search" /> */}
                <div class="containerBtn">
                  <div class="search-box">
                    <input
                      type="text"
                      class="search-input"
                      placeholder="Search.."
                    />

                    <button class="search-button">
                      <i class="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
