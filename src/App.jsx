import React, { useState, useEffect } from "react";

// MBB Portfolio - Industrial Design Engineer
// Maria de la Borbolla Beristain
// Implementation assisted by Simon Vegelahn -> simonvegelahn.github.io

const MBBPortfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [nameRevealProgress, setNameRevealProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const fullName = "Maria de la Borbolla Beristain";
  const revealThreshold = 400;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const progress = Math.min(window.scrollY / revealThreshold, 1);
      setNameRevealProgress(progress);

      const sections = ["hero", "work", "about", "process", "contact"];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const visibleLetters = Math.floor(nameRevealProgress * fullName.length);

  const projects = [
    {
      id: 1,
      title: "Foil Up",
      category: "Sports Equipment",
      description:
        "Foldable hydrofoil mast with snap-finger safety mechanism for shallow water operation. Developed rotating mast system with FEA-validated impact protection.",
      year: "2020-2021",
      timeline: "3 months",
      type: "Collaborative Project",
      size: "hero",
    },
    {
      id: 2,
      title: "Daylight Feeling",
      category: "Furniture",
      description:
        "High-end table lamp with rotating base mechanism for synchronized shade movement. Creates warm winter ambiance through controlled light distribution.",
      year: "2022-2023",
      timeline: "4 months",
      type: "Individual Project",
      size: "tall",
    },
    {
      id: 3,
      title: "IPL Roller",
      category: "Consumer Products",
      description:
        "Rolling attachment for Philips IPL devices enabling continuous glide motion with auto-triggered flash for precise, even hair removal coverage.",
      year: "2022",
      timeline: "4 months",
      type: "Philips Brief",
      size: "wide",
    },
    {
      id: 4,
      title: "Arctic World",
      category: "Toy Design",
      description:
        "Themed play world for Delta Sports train system. Designed observatory component with geodesic dome structure for 3D printing.",
      year: "2025",
      timeline: "3 months",
      type: "Delta Sports",
      size: "medium",
    },
  ];

  const processSteps = [
    {
      num: "01",
      title: "Discover",
      desc: "Research, user context, technical constraints. Understanding the problem space deeply.",
    },
    {
      num: "02",
      title: "Define",
      desc: "Sharpen the brief. Identify opportunities and set measurable goals.",
    },
    {
      num: "03",
      title: "Develop",
      desc: "Sketches, CAD modeling, FEA analysis, physical prototypes. Iterate relentlessly.",
    },
    {
      num: "04",
      title: "Deliver",
      desc: "Production-ready documentation, technical drawings, material specifications.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Syne:wght@600;700;800&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        .nav-link:hover { color: #E85D04 !important; }
        .project-card { transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease !important; }
        .project-card:hover { transform: translateY(-12px) rotate(-1deg) !important; box-shadow: 0 32px 64px rgba(0,0,0,0.2) !important; }
        .contact-email:hover { letter-spacing: 4px !important; }
        .contact-link:hover { color: #E85D04 !important; transform: translateY(-2px); }
        .bleed-text { animation: bleed-pulse 4s ease-in-out infinite; }

        @keyframes bleed-pulse {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-10px); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }

        @keyframes slide-in-left {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -10%); }
          30% { transform: translate(3%, -15%); }
          50% { transform: translate(-10%, 5%); }
          70% { transform: translate(8%, 10%); }
          90% { transform: translate(-3%, 8%); }
        }

        .floating-shape { animation: float 6s ease-in-out infinite; }
        .floating-shape-delayed { animation: float 6s ease-in-out infinite; animation-delay: -3s; }

        @media (max-width: 1024px) {
          .project-card {
            margin-left: -4vw !important;
            margin-right: -4vw !important;
            transform: rotate(0deg) !important;
          }
          .project-card > div:first-of-type { flex-direction: column !important; }
          .process-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .bleed-title { font-size: 15vw !important; }
        }

        @media (max-width: 768px) {
          .project-card {
            margin-left: 0 !important;
            margin-right: 0 !important;
            margin-top: 0 !important;
          }
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .about-image-col { position: relative !important; top: 0 !important; }
          .nav { padding: 16px 24px !important; }
          .nav-links { gap: 16px !important; }
          .section { padding: 80px 24px !important; }
          .about-meta { flex-direction: column !important; gap: 24px !important; }
          .bleed-title { font-size: 20vw !important; left: -10px !important; }
          .hero-accent { display: none; }
        }

        @media (max-width: 480px) {
          .process-grid { grid-template-columns: 1fr !important; }
          .hero-mark { font-size: 25vw !important; }
        }
      `}</style>

      <div
        style={{
          fontFamily: '"DM Sans", -apple-system, sans-serif',
          backgroundColor: "#FAF8F5",
          color: "#1A1A1A",
          minHeight: "100vh",
          position: "relative",
          overflowX: "hidden",
        }}
      >
        {/* Animated grain overlay */}
        <div
          style={{
            position: "fixed",
            top: "-50%",
            left: "-50%",
            width: "200%",
            height: "200%",
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            opacity: 0.04,
            pointerEvents: "none",
            zIndex: 1000,
            animation: "grain 8s steps(10) infinite",
          }}
        />

        {/* Floating accent shapes */}
        <div
          className="floating-shape hero-accent"
          style={{
            position: "fixed",
            top: "15%",
            right: "-80px",
            width: "200px",
            height: "200px",
            backgroundColor: "#E85D04",
            borderRadius: "50%",
            opacity: 0.1,
            zIndex: 0,
            filter: "blur(40px)",
          }}
        />
        <div
          className="floating-shape-delayed hero-accent"
          style={{
            position: "fixed",
            bottom: "20%",
            left: "-100px",
            width: "300px",
            height: "300px",
            backgroundColor: "#2D6A4F",
            borderRadius: "50%",
            opacity: 0.08,
            zIndex: 0,
            filter: "blur(60px)",
          }}
        />

        {/* Navigation */}
        <nav
          className="nav"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "24px 48px",
            backgroundColor: "transparent",
            backdropFilter: scrollY > 100 ? "blur(10px)" : "none",
            background:
              scrollY > 100 ? "rgba(250, 248, 245, 0.9)" : "transparent",
            zIndex: 100,
            transition: "all 0.4s ease",
          }}
        >
          <div
            style={{
              fontFamily: '"Syne", sans-serif',
              fontSize: "28px",
              fontWeight: 800,
              letterSpacing: "-2px",
              transform: `rotate(${scrollY * 0.02}deg)`,
            }}
          >
            MBB
          </div>
          <div className="nav-links" style={{ display: "flex", gap: "32px" }}>
            {["work", "about", "process", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="nav-link"
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  textDecoration: "none",
                  textTransform: "lowercase",
                  transition: "all 0.3s ease",
                  color: activeSection === section ? "#E85D04" : "#1A1A1A",
                  transform:
                    activeSection === section
                      ? "translateX(8px)"
                      : "translateX(0)",
                }}
              >
                {activeSection === section && (
                  <span style={{ marginRight: "4px" }}>→</span>
                )}
                {section}
              </a>
            ))}
          </div>
        </nav>

        {/* Hero */}
        <section
          id="hero"
          style={{
            minHeight: "160vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            padding: "120px 48px",
          }}
        >
          {/* Giant background number */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) rotate(${-5 + scrollY * 0.01}deg)`,
              fontFamily: '"Syne", sans-serif',
              fontSize: "clamp(300px, 60vw, 800px)",
              fontWeight: 800,
              color: "rgba(0,0,0,0.02)",
              pointerEvents: "none",
              userSelect: "none",
              lineHeight: 0.8,
            }}
          >
            ID
          </div>

          <div
            style={{
              textAlign: "center",
              position: "sticky",
              top: "25vh",
              zIndex: 1,
            }}
          >
            <h1
              className="hero-mark"
              style={{
                fontFamily: '"Syne", sans-serif',
                fontSize: "clamp(140px, 30vw, 350px)",
                fontWeight: 800,
                letterSpacing: "-12px",
                margin: 0,
                lineHeight: 0.8,
                transform: `translateY(${scrollY * 0.4}px) rotate(${scrollY * -0.02}deg)`,
                opacity: 1 - scrollY / 500,
                transition: "opacity 0.3s ease",
                background: "linear-gradient(135deg, #1A1A1A 0%, #4A4A4A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              MBB
            </h1>

            {/* Decorative line */}
            <div
              style={{
                width: `${nameRevealProgress * 200}px`,
                height: "3px",
                backgroundColor: "#E85D04",
                margin: "30px auto",
                transition: "width 0.3s ease",
              }}
            />

            <div style={{ marginTop: "20px", overflow: "hidden" }}>
              <span
                style={{
                  fontFamily: '"Syne", sans-serif',
                  fontSize: "clamp(20px, 3.5vw, 36px)",
                  fontWeight: 700,
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                }}
              >
                {fullName.split("").map((letter, i) => (
                  <span
                    key={i}
                    style={{
                      display: "inline-block",
                      opacity: i < visibleLetters ? 1 : 0.08,
                      transform:
                        i < visibleLetters
                          ? `translateY(0) rotate(0deg)`
                          : `translateY(40px) rotate(10deg)`,
                      transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.025}s`,
                      color: i < visibleLetters ? "#1A1A1A" : "#CCC",
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                ))}
              </span>
            </div>

            <div
              style={{
                marginTop: "40px",
                opacity: nameRevealProgress > 0.5 ? 1 : 0,
                transform:
                  nameRevealProgress > 0.5
                    ? "translateY(0)"
                    : "translateY(50px)",
                transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <p
                style={{
                  fontSize: "20px",
                  color: "#666",
                  marginBottom: "16px",
                }}
              >
                Industrial Design Engineer
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "24px",
                  flexWrap: "wrap",
                }}
              >
                {["Sports Equipment", "Aviation", "Furniture"].map(
                  (domain, i) => (
                    <span
                      key={domain}
                      style={{
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "#E85D04",
                        padding: "8px 16px",
                        border: "1px solid #E85D04",
                        borderRadius: "100px",
                        opacity: nameRevealProgress > 0.7 + i * 0.1 ? 1 : 0,
                        transform:
                          nameRevealProgress > 0.7 + i * 0.1
                            ? "translateY(0)"
                            : "translateY(20px)",
                        transition: `all 0.5s ease ${i * 0.1}s`,
                      }}
                    >
                      {domain}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            style={{
              position: "absolute",
              bottom: "40px",
              left: "48px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              opacity: 1 - nameRevealProgress,
              transition: "opacity 0.4s ease",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "2px",
                backgroundColor: "#1A1A1A",
              }}
            />
            <span
              style={{
                fontSize: "11px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Scroll
            </span>
          </div>
        </section>

        {/* Work Section - Chaotic grid */}
        <section
          id="work"
          className="section"
          style={{ padding: "80px 48px 160px", position: "relative" }}
        >
          {/* Bleeding section title */}
          <h2
            className="bleed-text bleed-title"
            style={{
              fontFamily: '"Syne", sans-serif',
              fontSize: "clamp(80px, 12vw, 180px)",
              fontWeight: 800,
              position: "absolute",
              top: "-40px",
              left: "-20px",
              color: "rgba(0,0,0,0.03)",
              letterSpacing: "-8px",
              pointerEvents: "none",
              userSelect: "none",
              zIndex: 0,
            }}
          >
            SELECTED WORK
          </h2>

          <div
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: "600px",
              marginBottom: "100px",
              marginLeft: "5%",
            }}
          >
            <span
              style={{
                fontFamily: '"Syne", sans-serif',
                fontSize: "72px",
                fontWeight: 800,
                color: "#E85D04",
                opacity: 0.2,
                position: "absolute",
                top: "-50px",
                left: "-30px",
              }}
            >
              01
            </span>
            <h2
              style={{
                fontFamily: '"Syne", sans-serif',
                fontSize: "clamp(42px, 7vw, 64px)",
                fontWeight: 700,
                margin: "0 0 24px 0",
                letterSpacing: "-3px",
                lineHeight: 1,
              }}
            >
              Selected
              <br />
              Work
            </h2>
            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.7,
                color: "#666",
                maxWidth: "400px",
              }}
            >
              Each project is a story of constraints conquered and problems
              reimagined.
            </p>
          </div>

          {/* Stacked cards with alternating left/right entry */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "60px",
              maxWidth: "1000px",
              margin: "0 auto",
              position: "relative",
            }}
          >
            {/* Decorative accent block */}
            <div
              style={{
                position: "absolute",
                top: "300px",
                right: "-120px",
                width: "120px",
                height: "400px",
                backgroundColor: "#E85D04",
                opacity: 0.1,
                borderRadius: "8px",
                transform: "rotate(-5deg)",
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "800px",
                left: "-100px",
                width: "100px",
                height: "300px",
                backgroundColor: "#2D6A4F",
                opacity: 0.08,
                borderRadius: "8px",
                transform: "rotate(3deg)",
                zIndex: 0,
              }}
            />

            {projects.map((project, index) => {
              const isFromLeft = index % 2 === 0;
              return (
                <div
                  key={project.id}
                  className="project-card"
                  style={{
                    marginLeft: isFromLeft ? "-12vw" : "18vw",
                    marginRight: isFromLeft ? "18vw" : "-12vw",
                    marginTop:
                      index === 0
                        ? "0"
                        : index % 3 === 0
                          ? "40px"
                          : index % 3 === 1
                            ? "-20px"
                            : "20px",
                    transform: isFromLeft
                      ? "rotate(-0.8deg)"
                      : "rotate(0.8deg)",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "16px",
                    overflow: "hidden",
                    cursor: "pointer",
                    boxShadow: "0 8px 40px rgba(0,0,0,0.1)",
                    position: "relative",
                    zIndex: 1,
                  }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Direction indicator */}
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      [isFromLeft ? "right" : "left"]: "-60px",
                      transform: "translateY(-50%)",
                      fontFamily: '"Syne", sans-serif',
                      fontSize: "120px",
                      fontWeight: 800,
                      color: "rgba(0,0,0,0.03)",
                      pointerEvents: "none",
                      zIndex: 0,
                    }}
                  >
                    0{project.id}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: isFromLeft ? "row" : "row-reverse",
                      minHeight: "320px",
                    }}
                  >
                    {/* Image side */}
                    <div
                      style={{
                        flex: "1.3",
                        position: "relative",
                        backgroundColor: "#E8E8E8",
                        overflow: "hidden",
                        minHeight: "320px",
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: `linear-gradient(${135 + index * 20}deg, #E0E0E0 0%, #C8C8C8 100%)`,
                        }}
                      >
                        <span
                          style={{
                            fontSize: "14px",
                            color: "#999",
                            fontStyle: "italic",
                          }}
                        >
                          Product Image
                        </span>
                      </div>

                      {/* Hover overlay */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(135deg, rgba(232, 93, 4, 0.95) 0%, rgba(180, 50, 0, 0.95) 100%)",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          opacity: hoveredProject === project.id ? 1 : 0,
                          transition: "opacity 0.4s ease",
                        }}
                      >
                        <span
                          style={{
                            color: "#FFFFFF",
                            fontSize: "14px",
                            fontWeight: 600,
                            letterSpacing: "3px",
                            textTransform: "uppercase",
                          }}
                        >
                          View Project
                        </span>
                        <div
                          style={{
                            width: "50px",
                            height: "2px",
                            backgroundColor: "#FFFFFF",
                            marginTop: "16px",
                          }}
                        />
                      </div>

                      {/* Category tag */}
                      <div
                        style={{
                          position: "absolute",
                          top: "20px",
                          [isFromLeft ? "left" : "right"]: "20px",
                          backgroundColor: "#2D6A4F",
                          color: "#FFFFFF",
                          fontSize: "10px",
                          fontWeight: 700,
                          padding: "8px 14px",
                          borderRadius: "100px",
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                          opacity: hoveredProject === project.id ? 0 : 1,
                          transition: "opacity 0.3s ease",
                        }}
                      >
                        {project.category}
                      </div>
                    </div>

                    {/* Content side */}
                    <div
                      style={{
                        flex: "1",
                        padding: "40px 36px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Syne", sans-serif',
                          fontSize: "64px",
                          fontWeight: 800,
                          color: "rgba(0,0,0,0.04)",
                          lineHeight: 1,
                          marginBottom: "-10px",
                        }}
                      >
                        0{project.id}
                      </span>
                      <h3
                        style={{
                          fontFamily: '"Syne", sans-serif',
                          fontSize: "28px",
                          fontWeight: 700,
                          margin: "0 0 12px 0",
                          letterSpacing: "-1px",
                        }}
                      >
                        {project.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "15px",
                          color: "#666",
                          lineHeight: 1.6,
                          margin: "0 0 20px 0",
                        }}
                      >
                        {project.description}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          gap: "16px",
                          flexWrap: "wrap",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "11px",
                            color: "#E85D04",
                            fontWeight: 600,
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                          }}
                        >
                          {project.timeline}
                        </span>
                        <span
                          style={{
                            fontSize: "11px",
                            color: "#999",
                            fontWeight: 500,
                          }}
                        >
                          {project.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="section"
          style={{
            padding: "160px 48px",
            backgroundColor: "#FFFFFF",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Large decorative text */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: "-10%",
              transform: "translateY(-50%) rotate(90deg)",
              fontFamily: '"Syne", sans-serif',
              fontSize: "200px",
              fontWeight: 800,
              color: "rgba(0,0,0,0.02)",
              letterSpacing: "-10px",
              pointerEvents: "none",
            }}
          >
            ABOUT
          </div>

          <div
            className="about-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr",
              gap: "120px",
              maxWidth: "1300px",
              margin: "0 auto",
              alignItems: "start",
              position: "relative",
            }}
          >
            <div style={{ paddingTop: "60px" }}>
              <span
                style={{
                  fontFamily: '"Syne", sans-serif',
                  fontSize: "100px",
                  fontWeight: 800,
                  color: "#E85D04",
                  opacity: 0.15,
                  position: "absolute",
                  top: "0",
                  left: "0",
                }}
              >
                02
              </span>

              <h2
                style={{
                  fontFamily: '"Syne", sans-serif',
                  fontSize: "clamp(48px, 6vw, 72px)",
                  fontWeight: 700,
                  margin: "0 0 48px 0",
                  letterSpacing: "-4px",
                  lineHeight: 0.95,
                }}
              >
                The
                <br />
                Designer
              </h2>

              <div style={{ marginBottom: "48px" }}>
                <p
                  style={{
                    fontSize: "28px",
                    fontWeight: 500,
                    lineHeight: 1.3,
                    marginBottom: "32px",
                    letterSpacing: "-0.5px",
                  }}
                >
                  I design physical products that solve real problems – objects
                  you can hold, use, and trust.
                </p>
                <p
                  style={{
                    fontSize: "17px",
                    lineHeight: 1.8,
                    color: "#555",
                    marginBottom: "20px",
                  }}
                >
                  From Mexico City to the Netherlands, I followed my curiosity.
                  After graduating high school, I began studying for my private
                  pilot's license. That's where I became fascinated by how
                  physics, engineering, and human experience shape the world
                  around us – and how thoughtful design can improve daily life.
                </p>
                <p
                  style={{
                    fontSize: "17px",
                    lineHeight: 1.8,
                    color: "#555",
                    marginBottom: "20px",
                  }}
                >
                  Now in my 5th semester at Fontys University of Applied
                  Sciences, I work across SolidWorks, Keyshot, Rhinoceros, and
                  physical prototyping. I've collaborated with companies like
                  Philips and Delta Sports, applying FEA analysis, mechanism
                  design, and user-centered thinking to create products that
                  perform.
                </p>
                <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#555" }}>
                  Outside of design, I value balance: gymnastics, dance, rock
                  climbing, good food with friends. I'm currently seeking
                  internship opportunities for my graduation project in Europe
                  or New Zealand.
                </p>
              </div>

              <div
                className="about-meta"
                style={{
                  display: "flex",
                  gap: "48px",
                  paddingTop: "32px",
                  borderTop: "2px solid #1A1A1A",
                }}
              >
                {[
                  { label: "Currently", value: "6th Semester · Fontys" },
                  { label: "Based in", value: "Venlo, NL" },
                  { label: "Open to", value: "Europe, Mexico and the World" },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "#E85D04",
                        textTransform: "uppercase",
                        letterSpacing: "2px",
                      }}
                    >
                      {item.label}
                    </span>
                    <span style={{ fontSize: "15px", fontWeight: 600 }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="about-image-col"
              style={{ position: "sticky", top: "120px" }}
            >
              <div style={{ position: "relative" }}>
                {/* Offset accent rectangle */}
                <div
                  style={{
                    position: "absolute",
                    top: "-30px",
                    left: "-30px",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#E85D04",
                    borderRadius: "12px",
                    zIndex: 0,
                  }}
                />
                {/*
                  <img
                    src="/portrait.jpg"
                    alt="Maria de la Borbolla Beristain"
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "4/5",
                      borderRadius: "12px",
                      objectFit: "cover",
                      objectPosition: "center top",
                      zIndex: 1,
                    }}
                  />
                  */}
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "4/5",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "linear-gradient(135deg, #E8E8E8 0%, #D0D0D0 100%)",
                    zIndex: 1,
                  }}
                >
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#999",
                      fontStyle: "italic",
                    }}
                  >
                    Portrait
                  </span>
                </div>
                {/* Second offset block */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-20px",
                    right: "-20px",
                    width: "60%",
                    height: "40%",
                    backgroundColor: "#2D6A4F",
                    opacity: 0.2,
                    borderRadius: "8px",
                    zIndex: 0,
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section
          id="process"
          className="section"
          style={{
            position: "relative",
            padding: "200px 48px 160px",
            overflow: "hidden",
            backgroundColor: "#0D0D0D",
          }}
        >
          {/* Angled overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "150px",
              backgroundColor: "#FFFFFF",
              transform: "skewY(-3deg)",
              transformOrigin: "top right",
            }}
          />

          {/* Massive background number */}
          <div
            style={{
              position: "absolute",
              bottom: "-100px",
              right: "-50px",
              fontFamily: '"Syne", sans-serif',
              fontSize: "clamp(300px, 50vw, 600px)",
              fontWeight: 800,
              color: "rgba(255,255,255,0.02)",
              lineHeight: 0.8,
              pointerEvents: "none",
            }}
          >
            03
          </div>

          <div
            style={{
              position: "relative",
              maxWidth: "1200px",
              margin: "0 auto",
              color: "#FFFFFF",
              zIndex: 1,
            }}
          >
            <h2
              style={{
                fontFamily: '"Syne", sans-serif',
                fontSize: "clamp(48px, 8vw, 96px)",
                fontWeight: 700,
                margin: "0 0 24px 0",
                letterSpacing: "-4px",
                lineHeight: 0.9,
              }}
            >
              How I<br />
              Work
            </h2>
            <p
              style={{
                fontSize: "20px",
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.6)",
                maxWidth: "500px",
                marginBottom: "100px",
              }}
            >
              Design is not linear, but it is intentional.
            </p>

            <div
              className="process-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "32px",
              }}
            >
              {processSteps.map((step, i) => (
                <div
                  key={step.num}
                  style={{
                    padding: "40px 0",
                    borderTop: "2px solid #E85D04",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      fontFamily: '"Syne", sans-serif',
                      fontSize: "80px",
                      fontWeight: 800,
                      color: "rgba(255,255,255,0.05)",
                      position: "absolute",
                      top: "20px",
                      right: "0",
                    }}
                  >
                    {step.num}
                  </span>
                  <h3
                    style={{
                      fontFamily: '"Syne", sans-serif',
                      fontSize: "28px",
                      fontWeight: 700,
                      margin: "0 0 16px 0",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.6,
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="section"
          style={{
            padding: "180px 48px 80px",
            textAlign: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "100px",
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: '"Syne", sans-serif',
              fontSize: "clamp(100px, 20vw, 250px)",
              fontWeight: 800,
              color: "rgba(0,0,0,0.03)",
              letterSpacing: "-10px",
              pointerEvents: "none",
              whiteSpace: "nowrap",
            }}
          >
            LET'S TALK
          </div>

          <div
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              position: "relative",
              zIndex: 1,
            }}
          >
            <span
              style={{
                fontFamily: '"Syne", sans-serif',
                fontSize: "80px",
                fontWeight: 800,
                color: "#E85D04",
                opacity: 0.15,
                display: "block",
                marginBottom: "-20px",
              }}
            >
              04
            </span>
            <h2
              style={{
                fontFamily: '"Syne", sans-serif',
                fontSize: "clamp(48px, 8vw, 80px)",
                fontWeight: 700,
                margin: "0 0 32px 0",
                letterSpacing: "-4px",
              }}
            >
              Let's Build
              <br />
              Something
            </h2>
            <p
              style={{
                fontSize: "20px",
                lineHeight: 1.6,
                color: "#666",
                marginBottom: "60px",
              }}
            >
              Currently seeking internship opportunities for my graduation
              project. Open to discussing new projects, creative ideas, or
              opportunities to contribute to your team.
            </p>

            <a
              href="mailto:m.delaborbollaberistain@student.fontys.nl"
              className="contact-email"
              style={{
                fontFamily: '"Syne", sans-serif',
                fontSize: "clamp(18px, 2.5vw, 28px)",
                fontWeight: 700,
                color: "#E85D04",
                textDecoration: "none",
                display: "inline-block",
                marginBottom: "48px",
                letterSpacing: "0px",
                transition: "letter-spacing 0.4s ease",
                whiteSpace: "nowrap",
              }}
            >
              m.delaborbollaberistain@student.fontys.nl
            </a>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "32px",
                flexWrap: "wrap",
              }}
            >
              {/* PLACEHOLDER: Add actual Behance URL/CV to download */}
              {[
                {
                  label: "LinkedIn",
                  url: "https://www.linkedin.com/in/maria-de-la-borbolla-beristain-07834125a/",
                },
                { label: "Behance", url: "#" },
                { label: "Download CV", url: "#" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className="contact-link"
                  style={{
                    fontSize: "14px",
                    color: "#666",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    fontWeight: 500,
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <footer
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              maxWidth: "1200px",
              margin: "160px auto 0",
              paddingTop: "32px",
              borderTop: "1px solid #E8E8E8",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <span
              style={{
                fontFamily: '"Syne", sans-serif',
                fontSize: "16px",
                fontWeight: 700,
                letterSpacing: "-0.5px",
              }}
            >
              Maria de la Borbolla Beristain
            </span>
            <span style={{ fontSize: "14px", color: "#999" }}>
              © 2026. All rights reserved.
            </span>
          </footer>
        </section>
      </div>
    </>
  );
};

export default MBBPortfolio;
