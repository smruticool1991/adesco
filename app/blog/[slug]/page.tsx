import { notFound } from "next/navigation"

const posts = [
  {
    slug: "goat-banking-program-changing-lives-rural-alberta",
    category: "Goat Banking",
    categoryAccent: "#2e7d32",
    date: "June 10, 2026",
    title: "How the Goat Banking Program is Changing Lives in Rural Alberta",
    excerpt:
      "For families in Parkland County, owning livestock was once out of reach. Adesco's Goat Banking Program is rewriting that story — one goat, one family, one cycle at a time.",
    author: "Timothy Adekola",
    authorRole: "President & Founder",
    authorImg: "/assets/img/president.jpg",
    img: "/assets/img/initiatives/goat-banking.jpg",
    readTime: "5 min read",
    content: [
      {
        heading: "The Problem of Livestock Access",
        body: "For many families in rural Alberta, owning livestock has long been an unattainable goal. The upfront cost of purchasing goats, combined with the infrastructure required to raise them, has placed animal husbandry out of reach for low-income and marginalized households. Adesco Western Ranch recognized this gap and designed a model that removes the financial barrier entirely.",
      },
      {
        heading: "How the Program Works",
        body: "The Goat Banking Program operates on a rotating stewardship model. Adesco places a breeding doe with a participating family at no cost. The family raises the goat, benefits from milk production, and when the doe delivers, they keep the offspring and return the original doe — or one equivalent animal — to the program for placement with the next family. This cycle repeats, allowing a single goat to benefit dozens of families over its lifetime.",
      },
      {
        heading: "Real Impact on Real Families",
        body: "Since launching in 2023, the program has served over 30 families across Parkland County. Participants report not only the direct nutritional and economic benefits of fresh goat milk and cheese, but also a renewed sense of agency and connection to the land. Several families have gone on to expand their own small operations using the skills and confidence gained through the program.",
      },
      {
        heading: "What Comes Next",
        body: "Adesco is working to extend the Goat Banking Program into additional Alberta counties, with a target of 100 participating families by the end of 2027. The organization is also developing a companion training curriculum covering goat health, pasture management, and product processing — ensuring every family has the knowledge they need to succeed.",
      },
    ],
    tags: ["Livestock Banking", "Community Equity", "Alberta", "Food Security"],
  },
  {
    slug: "preserving-heritage-seeds-why-every-variety-matters",
    category: "Cultural Seeds",
    categoryAccent: "#6a1b9a",
    date: "May 28, 2026",
    title: "Preserving Heritage Seeds: Why Every Variety Matters",
    excerpt:
      "Behind each seed packet in the Adesco library is a story spanning continents and centuries. We explore why saving these varieties is an act of cultural resistance.",
    author: "Ranch Operations",
    authorRole: "Farm Management Team",
    authorImg: "/assets/img/farmer.webp",
    img: "/assets/img/about2.webp",
    readTime: "6 min read",
    content: [
      {
        heading: "Seeds as Living Memory",
        body: "Heritage seeds carry more than genetic information — they carry culture, history, and the agricultural wisdom of generations. Each variety in the Adesco Cultural Seeds Library was selected because it represents a food tradition that has been at risk of disappearing, either through commercial seed consolidation or the displacement of the communities that cultivated it.",
      },
      {
        heading: "What Makes a Seed 'Heritage'",
        body: "A heritage or heirloom seed is an open-pollinated variety that has been saved and passed down for at least 50 years, often much longer. Unlike commercial hybrid seeds, heirlooms can be saved from season to season without loss of the plant's defining characteristics. This makes them particularly valuable for communities that cannot afford to purchase new seeds every year.",
      },
      {
        heading: "The Adesco Seed Library",
        body: "Adesco's seed library currently holds over 80 varieties, including African leafy greens, drought-resistant legumes, and heritage grains brought to Canada by immigrant farming families. Community members can borrow seeds each spring, grow them out, and return a portion of the harvest as saved seeds — keeping the library living and expanding.",
      },
      {
        heading: "An Act of Cultural Resistance",
        body: "In a food system dominated by a handful of multinational seed corporations, choosing to grow and save heritage varieties is a political act as much as an agricultural one. It is a declaration that the knowledge, flavours, and farming practices of marginalized communities have value — and that they will not be erased by the homogenizing forces of industrial agriculture.",
      },
    ],
    tags: ["Heritage Seeds", "Food Sovereignty", "Cultural Preservation", "Seed Saving"],
  },
  {
    slug: "what-regenerative-agriculture-means-on-an-alberta-ranch",
    category: "Regenerative Farming",
    categoryAccent: "#1565c0",
    date: "May 14, 2026",
    title: "What Regenerative Agriculture Actually Means on an Alberta Ranch",
    excerpt:
      "Cover cropping, rotational grazing, composting — these are not buzzwords at Adesco. They are the daily practices that keep our land healthy and our community fed.",
    author: "Timothy Adekola",
    authorRole: "President & Founder",
    authorImg: "/assets/img/president.jpg",
    img: "/assets/img/journey.webp",
    readTime: "7 min read",
    content: [
      {
        heading: "Beyond Organic",
        body: "Regenerative agriculture is often described as a step beyond organic farming — but what does that actually look like on the ground? At Adesco Western Ranch, it means actively rebuilding soil health rather than simply avoiding harmful inputs. Every practice on the farm is evaluated against one question: does this leave the land in better condition than we found it?",
      },
      {
        heading: "Rotational Grazing in Practice",
        body: "Our livestock move through a series of paddocks on a planned rotation, giving each section of pasture time to recover and regrow before the animals return. This mimics the natural movement patterns of wild herds and prevents the overgrazing that degrades soil structure and increases erosion. Well-managed grasslands also sequester significant amounts of carbon in their root systems.",
      },
      {
        heading: "Cover Crops and Soil Biology",
        body: "Between production seasons, Adesco plants diverse cover crop mixes — combinations of legumes, grasses, and brassicas — that fix nitrogen, prevent erosion, and feed the soil microbiome. Healthy soil biology is the foundation of everything: it drives nutrient cycling, water retention, and plant resilience. Without it, no amount of inputs can sustain long-term productivity.",
      },
      {
        heading: "Composting and Closed Loops",
        body: "Animal waste, crop residues, and kitchen scraps from the ranch operation are composted on-site and returned to the fields as finished compost. This closed-loop approach reduces our dependence on external inputs, eliminates waste, and continuously rebuilds the organic matter content of our soils. It is slow, careful work — but the results are measurable and lasting.",
      },
    ],
    tags: ["Regenerative Agriculture", "Soil Health", "Rotational Grazing", "Composting"],
  },
  {
    slug: "backyard-flock-to-community-asset-chicken-banking-story",
    category: "Chicken Banking",
    categoryAccent: "#f57f17",
    date: "April 30, 2026",
    title: "From Backyard Flock to Community Asset: The Chicken Banking Story",
    excerpt:
      "55+ families across Alberta are now raising free-range chickens through Adesco's banking model. Here is how the program works and why it is growing fast.",
    author: "Community Programs",
    authorRole: "Outreach & Education",
    authorImg: "/assets/img/gallery/youth.webp",
    img: "/assets/img/about.webp",
    readTime: "4 min read",
    content: [
      {
        heading: "A Flock for Every Family",
        body: "The Chicken Banking Program started with a simple observation: eggs are one of the most affordable and complete sources of protein available, yet many food-insecure families in Alberta cannot afford laying hens. By providing starter flocks to participating households, Adesco transforms an unreachable expense into a sustainable, self-replenishing food source.",
      },
      {
        heading: "Program Structure",
        body: "Each participating family receives a starter flock of six to eight laying hens, along with basic housing materials and a feeding guide. In return, they commit to returning an equivalent number of young hens to the program within 18 months, drawn from their own flock's offspring. This ensures the program can grow without requiring ongoing external funding for each new cohort.",
      },
      {
        heading: "More Than Eggs",
        body: "Beyond nutrition, the program has become a gateway to broader agricultural participation. Many families who started with chickens have gone on to join the Goat Banking Program, enroll in composting workshops, or begin growing vegetables. The flock becomes a starting point — a first step into a relationship with food production that deepens over time.",
      },
      {
        heading: "Growing Demand",
        body: "With over 55 families currently participating and a waitlist for the next intake, the Chicken Banking Program is one of Adesco's most in-demand initiatives. The organization is exploring partnerships with local feed suppliers and agricultural colleges to support program expansion while keeping costs minimal for participants.",
      },
    ],
    tags: ["Chicken Banking", "Food Security", "Community Programs", "Poultry"],
  },
  {
    slug: "black-farmers-fight-for-food-sovereignty-in-canada",
    category: "Food Sovereignty",
    categoryAccent: "#c62828",
    date: "April 15, 2026",
    title: "Black Farmers and the Fight for Food Sovereignty in Canada",
    excerpt:
      "Despite representing a growing portion of Alberta's farming community, Black farmers face systemic barriers to land and capital. We look at the landscape and what Adesco is doing to change it.",
    author: "Timothy Adekola",
    authorRole: "President & Founder",
    authorImg: "/assets/img/president.jpg",
    img: "/assets/img/banner/banner2.webp",
    readTime: "8 min read",
    content: [
      {
        heading: "A Growing Presence, A Persistent Gap",
        body: "Black farming communities in Canada are growing — yet they remain severely underrepresented in land ownership, agricultural financing, and policy decision-making. Studies consistently show that Black farmers are less likely to receive agricultural loans, more likely to farm rented land, and less likely to have access to the cooperative structures that give larger farming operations their competitive advantage.",
      },
      {
        heading: "The History Behind the Gap",
        body: "The barriers facing Black farmers in Canada are not accidental — they are the legacy of deliberate exclusion. From discriminatory homesteading policies that limited Black settlement in the Prairie provinces to the systematic exclusion of Black farmers from agricultural cooperatives throughout the 20th century, the playing field was tilted long before today's farmers arrived. Understanding this history is essential to designing solutions that actually work.",
      },
      {
        heading: "Food Sovereignty as a Framework",
        body: "Food sovereignty — the right of peoples to define their own food systems — offers a powerful framework for addressing these inequities. Rather than simply increasing access to the existing industrial food system, food sovereignty calls for the creation of alternative structures in which communities have genuine control: over the land they farm, the seeds they plant, the markets they access, and the policies that govern their work.",
      },
      {
        heading: "What Adesco Is Doing",
        body: "Adesco's programs are designed with food sovereignty principles at their core. The livestock banking model builds community wealth rather than dependence on external institutions. The seed library preserves cultural agricultural knowledge. The advocacy work connects individual farmers to broader movements for policy change. None of these interventions alone is sufficient — but together, they are building the infrastructure for genuine agricultural self-determination in Black Alberta communities.",
      },
    ],
    tags: ["Food Sovereignty", "Black Farmers", "Systemic Equity", "Alberta Policy"],
  },
  {
    slug: "cattle-banking-building-equity-through-shared-herd-ownership",
    category: "Cattle Banking",
    categoryAccent: "#1565c0",
    date: "March 22, 2026",
    title: "Cattle Banking: Building Equity Through Shared Herd Ownership",
    excerpt:
      "The Cattle Banking Program places grass-fed cattle with community families who produce milk, beef, and breeding stock — then pass one calf forward to the next family.",
    author: "Ranch Operations",
    authorRole: "Farm Management Team",
    authorImg: "/assets/img/farmer.webp",
    img: "/assets/img/initiatives/cattle-banking.jpg",
    readTime: "5 min read",
    content: [
      {
        heading: "Cattle as Community Capital",
        body: "Cattle represent some of the most significant agricultural capital available to farming families — but also the most inaccessible. A single quality breeding cow can cost several thousand dollars, placing herd ownership firmly out of reach for most families starting out in agriculture. The Adesco Cattle Banking Program changes this equation by treating the herd as shared community capital rather than individual property.",
      },
      {
        heading: "The Banking Cycle",
        body: "Each participating family receives one or more cattle from the Adesco herd, along with grazing access and mentorship from experienced ranch staff. The family benefits from milk production throughout the animal's tenure with them. When the cow calves, the family retains the calf and returns the mother to the program — or, in some arrangements, passes a weaned calf forward to the next family in the queue. Over time, families can build their own herds from the calves they retain.",
      },
      {
        heading: "Grass-Fed Standards",
        body: "All cattle in the Cattle Banking Program are raised on pasture under Adesco's regenerative grazing standards. Families receive training in rotational grazing, animal health monitoring, and sustainable land management as part of the program. This ensures that the animals remain healthy, the land remains productive, and the beef and dairy products that families generate meet the premium quality standards that command better prices in local markets.",
      },
      {
        heading: "Long-Term Wealth Building",
        body: "Unlike many charitable food programs, the Cattle Banking model is designed to create lasting economic assets for participants. A family that successfully completes two or three cycles may find themselves with a small breeding herd of their own — a genuine capital asset that can underpin long-term agricultural livelihoods. This is what Adesco means by community wealth: not just access to food, but access to the means of producing it.",
      },
    ],
    tags: ["Cattle Banking", "Livestock", "Community Wealth", "Regenerative Grazing"],
  },
]

const recentPosts = posts.slice(0, 4)

const categories = [
  { label: "All Posts", count: 6 },
  { label: "Goat Banking", count: 1 },
  { label: "Chicken Banking", count: 1 },
  { label: "Cattle Banking", count: 1 },
  { label: "Cultural Seeds", count: 1 },
  { label: "Regenerative Farming", count: 1 },
  { label: "Food Sovereignty", count: 1 },
]

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  return (
    <div>
      {/* ── Breadcrumb ── */}
      <div
        className="breadcrumb-area text-center shadow dark bg-fixed text-light"
        style={{ backgroundImage: "url(/assets/img/banner/banner13.webp)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1>{post.category}</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li><a href="/"><i className="fas fa-home"></i> Home</a></li>
                  <li><a href="/blog">Blog</a></li>
                  <li className="active">{post.category}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="default-padding">
        <div className="container">
          <div className="row">

            {/* ── Article ── */}
            <div className="col-lg-8 pr-50 pr-md-15 pr-xs-15">

              {/* Hero image */}
              <div
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  marginBottom: "36px",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
                }}
              >
                <img
                  src={post.img}
                  alt={post.title}
                  style={{ width: "100%", height: "420px", objectFit: "cover", display: "block" }}
                />
              </div>

              {/* Meta row */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "16px",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    background: post.categoryAccent,
                    color: "#fff",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    padding: "5px 14px",
                    borderRadius: "20px",
                  }}
                >
                  {post.category}
                </span>
                <span style={{ color: "#888", fontSize: "13px" }}>
                  <i className="fas fa-calendar-alt" style={{ marginRight: "6px", color: "#2e7d32" }}></i>
                  {post.date}
                </span>
                <span style={{ color: "#888", fontSize: "13px" }}>
                  <i className="fas fa-clock" style={{ marginRight: "6px", color: "#2e7d32" }}></i>
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h1
                style={{
                  fontWeight: 800,
                  color: "#1a2e1a",
                  lineHeight: 1.3,
                  marginBottom: "20px",
                  fontSize: "32px",
                }}
              >
                {post.title}
              </h1>

              {/* Author */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  marginBottom: "36px",
                  paddingBottom: "28px",
                  borderBottom: "1px solid #eee",
                }}
              >
                <img
                  src={post.authorImg}
                  alt={post.author}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid #e8f5e9",
                  }}
                />
                <div>
                  <p style={{ margin: 0, fontWeight: 700, color: "#1a2e1a", fontSize: "15px" }}>
                    {post.author}
                  </p>
                  <p style={{ margin: 0, color: "#888", fontSize: "13px" }}>{post.authorRole}</p>
                </div>
              </div>

              {/* Excerpt */}
              <p
                style={{
                  fontSize: "18px",
                  color: "#555",
                  lineHeight: 1.85,
                  marginBottom: "36px",
                  fontStyle: "italic",
                  borderLeft: `4px solid ${post.categoryAccent}`,
                  paddingLeft: "20px",
                }}
              >
                {post.excerpt}
              </p>

              {/* Body sections */}
              {post.content.map((section) => (
                <div key={section.heading} style={{ marginBottom: "32px" }}>
                  <h3
                    style={{
                      fontWeight: 800,
                      color: "#1a2e1a",
                      fontSize: "20px",
                      marginBottom: "14px",
                    }}
                  >
                    {section.heading}
                  </h3>
                  <p style={{ color: "#555", lineHeight: 1.9, fontSize: "16px", margin: 0 }}>
                    {section.body}
                  </p>
                </div>
              ))}

              {/* Tags */}
              <div
                style={{
                  marginTop: "48px",
                  paddingTop: "28px",
                  borderTop: "1px solid #eee",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <span style={{ fontWeight: 700, color: "#1a2e1a", fontSize: "14px", marginRight: "4px" }}>
                  Tags:
                </span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: "#f0f7f0",
                      color: "#2e7d32",
                      fontSize: "12px",
                      fontWeight: 600,
                      padding: "5px 14px",
                      borderRadius: "20px",
                      border: "1px solid #c8e6c9",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Back link */}
              <div style={{ marginTop: "48px" }}>
                <a
                  href="/blog"
                  className="btn btn-theme btn-md radius animation"
                >
                  <i className="fas fa-arrow-left" style={{ marginRight: "8px" }}></i>
                  Back to Blog
                </a>
              </div>
            </div>

            {/* ── Sidebar ── */}
            <div className="col-lg-4">

              {/* Search */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: "14px",
                  padding: "28px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
                  marginBottom: "30px",
                  border: "1px solid #f0f0f0",
                }}
              >
                <h5 style={{ fontWeight: 800, color: "#1a2e1a", marginBottom: "16px" }}>Search</h5>
                <div style={{ display: "flex" }}>
                  <input
                    type="text"
                    placeholder="Search articles..."
                    style={{
                      flex: 1,
                      padding: "10px 14px",
                      border: "1px solid #e0e0e0",
                      borderRight: "none",
                      borderRadius: "8px 0 0 8px",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  />
                  <button
                    style={{
                      background: "#2e7d32",
                      color: "#fff",
                      border: "none",
                      padding: "10px 16px",
                      borderRadius: "0 8px 8px 0",
                      cursor: "pointer",
                    }}
                  >
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: "14px",
                  padding: "28px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
                  marginBottom: "30px",
                  border: "1px solid #f0f0f0",
                }}
              >
                <h5 style={{ fontWeight: 800, color: "#1a2e1a", marginBottom: "20px" }}>Categories</h5>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {categories.map((cat) => (
                    <li
                      key={cat.label}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "10px 0",
                        borderBottom: "1px solid #f5f5f5",
                      }}
                    >
                      <a
                        href="/blog"
                        style={{
                          color: cat.label === post.category ? "#2e7d32" : "#555",
                          fontWeight: cat.label === post.category ? 700 : 500,
                          textDecoration: "none",
                          fontSize: "14px",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <i className="fas fa-chevron-right" style={{ fontSize: "10px", color: "#2e7d32" }}></i>
                        {cat.label}
                      </a>
                      <span
                        style={{
                          background: "#e8f5e9",
                          color: "#2e7d32",
                          fontSize: "11px",
                          fontWeight: 700,
                          padding: "2px 10px",
                          borderRadius: "20px",
                        }}
                      >
                        {cat.count}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: "14px",
                  padding: "28px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
                  marginBottom: "30px",
                  border: "1px solid #f0f0f0",
                }}
              >
                <h5 style={{ fontWeight: 800, color: "#1a2e1a", marginBottom: "20px" }}>Recent Posts</h5>
                <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  {recentPosts.map((p) => (
                    <a
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      style={{
                        display: "flex",
                        gap: "14px",
                        alignItems: "flex-start",
                        textDecoration: "none",
                      }}
                    >
                      <img
                        src={p.img}
                        alt={p.title}
                        style={{
                          width: "62px",
                          height: "62px",
                          borderRadius: "8px",
                          objectFit: "cover",
                          flexShrink: 0,
                        }}
                      />
                      <div>
                        <p
                          style={{
                            margin: "0 0 4px",
                            fontWeight: 700,
                            color: "#1a2e1a",
                            fontSize: "13px",
                            lineHeight: 1.4,
                          }}
                        >
                          {p.title}
                        </p>
                        <span style={{ color: "#aaa", fontSize: "12px" }}>
                          <i className="fas fa-calendar-alt" style={{ marginRight: "5px" }}></i>
                          {p.date}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div
                style={{
                  background: "linear-gradient(135deg, #1a3a22, #2e7d32)",
                  borderRadius: "14px",
                  padding: "32px 28px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    background: "rgba(255,255,255,0.15)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                  }}
                >
                  <i className="fas fa-envelope" style={{ color: "#fff", fontSize: "22px" }}></i>
                </div>
                <h5 style={{ color: "#fff", fontWeight: 800, marginBottom: "10px" }}>Stay Updated</h5>
                <p style={{ color: "rgba(255,255,255,0.80)", fontSize: "13px", lineHeight: 1.7, marginBottom: "20px" }}>
                  Get the latest stories from the ranch delivered to your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Your email address"
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "8px",
                    border: "none",
                    fontSize: "14px",
                    marginBottom: "12px",
                    outline: "none",
                  }}
                />
                <button
                  style={{
                    width: "100%",
                    background: "#82c45a",
                    color: "#fff",
                    border: "none",
                    padding: "11px",
                    borderRadius: "8px",
                    fontWeight: 700,
                    fontSize: "14px",
                    cursor: "pointer",
                    letterSpacing: "0.5px",
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
