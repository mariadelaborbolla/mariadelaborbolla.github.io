import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// Project data - could be moved to a separate data file
const projectsData = {
  "foil-up": {
    id: 1,
    title: "Foil Up",
    category: "Sports Equipment",
    heroDescription: "Foldable hydrofoil mast with snap-finger safety mechanism for shallow water operation.",
    timeline: "3 months",
    period: "Nov 2020 – Jan 2021",
    type: "Collaborative Project",
    team: "4 Members",
    role: "Snap Finger Design",
    software: "SolidWorks",
    analysis: "FEA Simulation",
    prototyping: "3D Printing",
    challenge: "Current hydrofoil boards face limitations in shallow waters due to their long fixed mast, preventing safe operation near shorelines or in lakes. The challenge was to create a foldable mast that adapts before reaching deeper conditions while maintaining structural integrity under hydrodynamic stress.",
    solution: "We developed a rotating mast mechanism that allows users to adjust mast depth for variable water conditions, maintaining optimal hydrodynamic lift even in shallow areas. A snap-finger safety system was integrated to absorb impacts from underwater obstacles, protecting the mast and ensuring user safety.",
    process: [
      { title: "Research & Analysis", description: "Studied existing hydrofoil mechanisms and identified failure points in shallow water usage. Analyzed competitor products and user pain points." },
      { title: "Concept Development", description: "Generated multiple concepts for the folding mechanism. Evaluated each for feasibility, manufacturing complexity, and user safety." },
      { title: "Snap Finger Design", description: "Focused on the safety release mechanism. Designed a snap-finger system that releases under impact to prevent damage while maintaining stability during normal use." },
      { title: "FEA Validation", description: "Ran finite element analysis to validate stress distribution and identify potential failure points. Iterated design based on simulation results." },
      { title: "Prototyping & Testing", description: "3D printed functional prototypes for mechanism testing. Validated locking force and release threshold through physical testing." }
    ],
    images: [
      { label: "Product Render" },
      { label: "Mechanism Detail" },
      { label: "Snap Finger Close-up" },
      { label: "FEA Results" }
    ],
    drawings: [
      { label: "Assembly Drawing" },
      { label: "Snap Finger Detail" },
      { label: "Exploded View" }
    ]
  },
  "daylight-feeling": {
    id: 2,
    title: "Daylight Feeling",
    category: "Furniture",
    heroDescription: "High-end table lamp designed to combat winter blues through simulated natural light.",
    timeline: "4 months",
    period: "Sep 2022 – Feb 2023",
    type: "Individual Project",
    team: "Solo",
    role: "Full Design & Production",
    software: "SolidWorks, Keyshot",
    materials: "Teak, Maple, ABS",
    prototyping: "Wood Workshop",
    challenge: "The \"Daylight Feeling\" lamp was designed with the purpose of creating a warm environment for the winter months. The shades are meant to simulate the same effect you get from bedroom shades in the morning, bringing natural light ambiance indoors.",
    solution: "The rotating base serves two key functions: it enables quicker, synchronized opening of the lampshades and ensures they open evenly, providing balanced light distribution throughout the room. This product can be beneficial in areas that have a colder spectrum of colors to light up the room and create a sense of warmth specifically during the months of winter.",
    process: [
      { title: "Material Exploration", description: "Explored wood bending techniques and grain patterns. Selected teak and maple for their contrasting tones and workability." },
      { title: "Mechanism Design", description: "Developed the rotating base mechanism to synchronize shade movement. Integrated magnets for smooth, satisfying operation." },
      { title: "Workshop Production", description: "Utilized Fontys wood workshop for CNC routing, lathe work, and hand finishing. Each shade individually shaped and sanded." },
      { title: "Assembly & Testing", description: "Assembled components with aluminum connectors. Tested light distribution and shade synchronization." }
    ],
    images: [
      { label: "Final Render - Open" },
      { label: "Final Render - Closed" },
      { label: "Physical Prototype" },
      { label: "Workshop Process" }
    ],
    drawings: [
      { label: "Assembly Drawing" },
      { label: "Section View" },
      { label: "BOM" }
    ]
  },
  "ipl-roller": {
    id: 3,
    title: "IPL Roller",
    category: "Consumer Products",
    heroDescription: "Rolling attachment for Philips IPL devices enabling continuous glide motion with auto-triggered flash.",
    timeline: "4 months",
    period: "Oct 2022 – Dec 2022",
    type: "Philips Design Brief",
    team: "Solo",
    role: "Full Design",
    software: "SolidWorks",
    materials: "Polycarbonate",
    prototyping: "3D Printing",
    challenge: "Create an addition to IPL (Intense Pulsed Light) devices that improves efficiency and ease of use. Current devices require manual positioning and triggering, leading to missed areas and uneven treatment coverage.",
    solution: "The addition of a rolling component allows the IPL device to glide smoothly across the skin. As it rolls, the flash is automatically triggered, ensuring precise and even coverage. This design minimizes missed areas by activating the light pulse exactly where the device is positioned, improving both efficiency and treatment uniformity.",
    process: [
      { title: "User Research", description: "Analyzed existing IPL device usage patterns and identified pain points in the treatment process." },
      { title: "Concept Generation", description: "Sketched multiple attachment concepts focusing on ergonomics and seamless integration with existing devices." },
      { title: "Mechanism Design", description: "Developed the rolling trigger mechanism that activates the flash based on movement, ensuring consistent coverage." },
      { title: "Prototyping", description: "Created functional prototypes to test the rolling mechanism and trigger responsiveness." }
    ],
    images: [
      { label: "Product Render" },
      { label: "Mechanism Detail" },
      { label: "Usage Context" },
      { label: "Exploded View" }
    ],
    drawings: [
      { label: "Assembly Drawing" },
      { label: "Roller Detail" },
      { label: "Tolerances" }
    ]
  },
  "arctic-world": {
    id: 4,
    title: "Arctic World",
    category: "Toy Design",
    heroDescription: "Themed play world for Delta Sports train system featuring an aurora observatory with geodesic dome.",
    timeline: "3 months",
    period: "Feb 2025 – May 2025",
    type: "Delta Sports Project",
    team: "Collaborative",
    role: "Observatory Design",
    software: "SolidWorks",
    materials: "ABS",
    prototyping: "3D Printing",
    challenge: "To create a new themed world that tells a compelling story and offers endless play possibilities. It should inspire children to continuously explore new scenarios, ensuring long-lasting engagement with the train system.",
    solution: "Developed an Arctic research station theme with educational elements about polar exploration and climate science. The observatory features a geodesic dome structure that opens to reveal aurora borealis projection elements, combining play with learning about Arctic environments.",
    process: [
      { title: "Theme Development", description: "Researched Arctic environments and scientific research stations. Identified key educational themes: ice cores, aurora borealis, marine biology, climate research." },
      { title: "Concept Sketching", description: "Created concept sketches for research facilities, observation stations, and interactive elements. Focused on recognizable Arctic architecture." },
      { title: "Observatory Design", description: "Developed the aurora observatory with geodesic dome and projection mechanism. Designed opening mechanism for interactive play." },
      { title: "Prototyping", description: "3D printed functional prototypes for client review. Tested compatibility with existing train track system." },
      { title: "Client Presentation", description: "Presented final concepts to Delta Sports stakeholders. Received feedback and refined designs for production feasibility." }
    ],
    images: [
      { label: "Full World Render" },
      { label: "Observatory Detail" },
      { label: "Physical Prototype" },
      { label: "Client Presentation" }
    ],
    drawings: [
      { label: "Observatory Assembly" },
      { label: "Dome Section" },
      { label: "Tolerances" }
    ]
  }
};

const projectOrder = ["foil-up", "daylight-feeling", "ipl-roller", "arctic-world"];

function getNextProject(currentSlug) {
  const currentIndex = projectOrder.indexOf(currentSlug);
  const nextIndex = (currentIndex + 1) % projectOrder.length;
  return projectOrder[nextIndex];
}

function getNextProjectTitle(currentSlug) {
  const nextSlug = getNextProject(currentSlug);
  return projectsData[nextSlug]?.title || "Next Project";
}

const ProjectDetail = () => {
  const { projectSlug } = useParams();
  const project = projectsData[projectSlug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectSlug]);

  if (!project) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: '"DM Sans", -apple-system, sans-serif',
        backgroundColor: "#FAF8F5",
      }}>
        <h1 style={{ fontFamily: '"Syne", sans-serif', fontSize: "48px", marginBottom: "24px" }}>
          Project not found
        </h1>
        <Link to="/" style={{ color: "#E85D04", textDecoration: "none", fontWeight: 600 }}>
          ← Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Syne:wght@600;700;800&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        
        .back-link:hover { transform: translateX(-4px); color: #E85D04 !important; }
        .image-card:hover { transform: scale(1.02); box-shadow: 0 12px 40px rgba(0,0,0,0.1); }
        .next-project-link:hover { color: #E85D04 !important; }
        
        @media (max-width: 1024px) {
          .project-hero-grid { grid-template-columns: 1fr !important; }
          .specs-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .images-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        
        @media (max-width: 768px) {
          .section { padding: 80px 24px !important; }
          .specs-grid { grid-template-columns: 1fr !important; }
          .drawings-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .nav-project { padding: 16px 24px !important; }
        }
        
        @media (max-width: 480px) {
          .images-grid { grid-template-columns: 1fr !important; }
          .drawings-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div style={{
        fontFamily: '"DM Sans", -apple-system, sans-serif',
        backgroundColor: "#FAF8F5",
        color: "#1A1A1A",
        minHeight: "100vh",
      }}>
        {/* Navigation */}
        <nav className="nav-project" style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px 48px",
          backgroundColor: "rgba(250, 248, 245, 0.95)",
          backdropFilter: "blur(10px)",
          zIndex: 100,
        }}>
          <Link
            to="/"
            className="back-link"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textDecoration: "none",
              color: "#1A1A1A",
              fontWeight: 600,
              fontSize: "14px",
              transition: "all 0.3s ease",
            }}
          >
            <span style={{ fontSize: "20px" }}>←</span>
            Back to Portfolio
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "#1A1A1A" }}>
            <div style={{
              fontFamily: '"Syne", sans-serif',
              fontSize: "28px",
              fontWeight: 800,
              letterSpacing: "-2px",
            }}>
              MBB
            </div>
          </Link>
        </nav>

        {/* Hero Section */}
        <section style={{
          padding: "160px 48px 80px",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Large background number */}
          <div style={{
            position: "absolute",
            top: "100px",
            right: "-50px",
            fontFamily: '"Syne", sans-serif',
            fontSize: "clamp(200px, 40vw, 500px)",
            fontWeight: 800,
            color: "rgba(0,0,0,0.02)",
            lineHeight: 0.8,
            pointerEvents: "none",
          }}>
            0{project.id}
          </div>

          <div style={{ maxWidth: "1300px", margin: "0 auto", position: "relative" }}>
            <div style={{
              display: "inline-block",
              backgroundColor: "#2D6A4F",
              color: "#FFFFFF",
              fontSize: "11px",
              fontWeight: 700,
              padding: "8px 16px",
              borderRadius: "100px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}>
              {project.category}
            </div>

            <h1 style={{
              fontFamily: '"Syne", sans-serif',
              fontSize: "clamp(56px, 10vw, 120px)",
              fontWeight: 800,
              letterSpacing: "-4px",
              lineHeight: 0.9,
              marginBottom: "32px",
            }}>
              {project.title}
            </h1>

            <p style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              lineHeight: 1.4,
              color: "#555",
              maxWidth: "700px",
              marginBottom: "48px",
            }}>
              {project.heroDescription}
            </p>

            <div style={{
              display: "flex",
              gap: "32px",
              flexWrap: "wrap",
            }}>
              {[
                { label: "Timeline", value: project.timeline },
                { label: "Period", value: project.period },
                { label: "Type", value: project.type },
              ].map((item, i) => (
                <div key={i}>
                  <span style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#E85D04",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    display: "block",
                    marginBottom: "4px",
                  }}>{item.label}</span>
                  <span style={{ fontSize: "16px", fontWeight: 600 }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section style={{ padding: "0 48px 80px" }}>
          <div style={{
            maxWidth: "1300px",
            margin: "0 auto",
            aspectRatio: "16/9",
            backgroundColor: "#E8E8E8",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #E0E0E0 0%, #C8C8C8 100%)",
            overflow: "hidden",
          }}>
            {/* PLACEHOLDER: Replace with actual hero image */}
            <span style={{ fontSize: "16px", color: "#999", fontStyle: "italic" }}>
              Hero Image
            </span>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="section" style={{
          padding: "120px 48px",
          backgroundColor: "#FFFFFF",
        }}>
          <div className="project-hero-grid" style={{
            maxWidth: "1300px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
          }}>
            <div>
              <h2 style={{
                fontFamily: '"Syne", sans-serif',
                fontSize: "14px",
                fontWeight: 700,
                color: "#E85D04",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}>
                The Challenge
              </h2>
              <p style={{
                fontSize: "18px",
                lineHeight: 1.8,
                color: "#444",
              }}>
                {project.challenge}
              </p>
            </div>
            <div>
              <h2 style={{
                fontFamily: '"Syne", sans-serif',
                fontSize: "14px",
                fontWeight: 700,
                color: "#E85D04",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}>
                The Solution
              </h2>
              <p style={{
                fontSize: "18px",
                lineHeight: 1.8,
                color: "#444",
              }}>
                {project.solution}
              </p>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="section" style={{
          padding: "120px 48px",
          backgroundColor: "#0D0D0D",
          color: "#FFFFFF",
        }}>
          <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
            <h2 style={{
              fontFamily: '"Syne", sans-serif',
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 700,
              letterSpacing: "-2px",
              marginBottom: "60px",
            }}>
              Specifications
            </h2>

            <div className="specs-grid" style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}>
              {[
                { label: "Timeline", value: project.timeline },
                { label: "Team", value: project.team },
                { label: "My Role", value: project.role },
                { label: "Software", value: project.software },
                { label: "Materials", value: project.materials || project.analysis },
                { label: "Prototyping", value: project.prototyping },
              ].map((spec, i) => (
                <div key={i} style={{
                  padding: "32px",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  borderLeft: "3px solid #E85D04",
                }}>
                  <span style={{
                    fontSize: "11px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    opacity: 0.6,
                    display: "block",
                    marginBottom: "8px",
                  }}>
                    {spec.label}
                  </span>
                  <span style={{
                    fontFamily: '"Syne", sans-serif',
                    fontSize: "20px",
                    fontWeight: 700,
                  }}>
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="section" style={{
          padding: "120px 48px",
          backgroundColor: "#FAF8F5",
        }}>
          <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
            <h2 style={{
              fontFamily: '"Syne", sans-serif',
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 700,
              letterSpacing: "-2px",
              marginBottom: "60px",
            }}>
              Design Process
            </h2>

            <div style={{
              position: "relative",
              paddingLeft: "40px",
              borderLeft: "2px solid #E8E8E8",
            }}>
              {project.process.map((step, i) => (
                <div key={i} style={{
                  position: "relative",
                  paddingBottom: i === project.process.length - 1 ? "0" : "48px",
                }}>
                  {/* Timeline dot */}
                  <div style={{
                    position: "absolute",
                    left: "-49px",
                    top: "4px",
                    width: "16px",
                    height: "16px",
                    backgroundColor: "#E85D04",
                    borderRadius: "50%",
                  }} />
                  
                  <h3 style={{
                    fontFamily: '"Syne", sans-serif',
                    fontSize: "22px",
                    fontWeight: 700,
                    marginBottom: "12px",
                    letterSpacing: "-0.5px",
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    fontSize: "16px",
                    lineHeight: 1.7,
                    color: "#666",
                    maxWidth: "700px",
                  }}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Images Gallery */}
        <section className="section" style={{
          padding: "120px 48px",
          backgroundColor: "#FFFFFF",
        }}>
          <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
            <h2 style={{
              fontFamily: '"Syne", sans-serif',
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 700,
              letterSpacing: "-2px",
              marginBottom: "60px",
            }}>
              Renders & Visuals
            </h2>

            <div className="images-grid" style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "24px",
            }}>
              {project.images.map((img, i) => (
                <div
                  key={i}
                  className="image-card"
                  style={{
                    aspectRatio: "4/3",
                    backgroundColor: "#E8E8E8",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `linear-gradient(${135 + i * 15}deg, #E0E0E0 0%, #D0D0D0 100%)`,
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    overflow: "hidden",
                  }}
                >
                  {/* PLACEHOLDER: Replace with actual images */}
                  <span style={{ fontSize: "14px", color: "#999", fontStyle: "italic" }}>
                    {img.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Drawings */}
        <section className="section" style={{
          padding: "120px 48px",
          backgroundColor: "#FAF8F5",
        }}>
          <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
            <h2 style={{
              fontFamily: '"Syne", sans-serif',
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 700,
              letterSpacing: "-2px",
              marginBottom: "60px",
            }}>
              Technical Drawings
            </h2>

            <div className="drawings-grid" style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}>
              {project.drawings.map((drawing, i) => (
                <div key={i} style={{
                  aspectRatio: "1",
                  backgroundColor: "rgba(0,0,0,0.02)",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: "12px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "16px",
                }}>
                  {/* Drawing icon */}
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ opacity: 0.3 }}>
                    <rect x="3" y="3" width="18" height="18" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="3" x2="9" y2="21" />
                  </svg>
                  <span style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    opacity: 0.5,
                  }}>
                    {drawing.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Next Project */}
        <section style={{
          padding: "120px 48px",
          backgroundColor: "#0D0D0D",
          color: "#FFFFFF",
          textAlign: "center",
        }}>
          <p style={{
            fontSize: "14px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            opacity: 0.5,
            marginBottom: "16px",
          }}>
            Next Project
          </p>
          <Link
            to={`/project/${getNextProject(projectSlug)}`}
            className="next-project-link"
            style={{
              fontFamily: '"Syne", sans-serif',
              fontSize: "clamp(36px, 6vw, 72px)",
              fontWeight: 700,
              color: "#FFFFFF",
              textDecoration: "none",
              letterSpacing: "-2px",
              transition: "color 0.3s ease",
            }}
          >
            {getNextProjectTitle(projectSlug)} →
          </Link>
        </section>

        {/* Footer */}
        <footer style={{
          padding: "32px 48px",
          backgroundColor: "#0D0D0D",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}>
          <div style={{
            maxWidth: "1300px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}>
            <span style={{
              fontFamily: '"Syne", sans-serif',
              fontSize: "16px",
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "-0.5px",
            }}>
              Maria de la Borbolla Beristain
            </span>
            <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)" }}>
              © 2025 — All rights reserved
            </span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ProjectDetail;
