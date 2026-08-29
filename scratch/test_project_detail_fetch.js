async function testProjectDetail() {
  try {
    const res = await fetch("http://localhost:1337/api/project-details?populate[galleryItems][on][project.gallery-item][populate][0]=media&populate[hero]=*&populate[heroMobile]=*&populate[gallery]=*&populate[galleryMobile]=*");
    const json = await res.json();
    console.log("PROJECT DETAILS STATUS:", res.status);
    console.log("TOTAL PROJECTS:", json.data?.length);
    json.data?.forEach((p) => {
      console.log(`\nProject: ${p.name || p.slug}`);
      console.log(`Hero URL: ${p.hero?.url || 'none'}`);
      console.log(`galleryItems count: ${p.galleryItems?.length || 0}`);
      p.galleryItems?.forEach((gi, idx) => {
        console.log(`  - Item #${idx + 1}: ratio=${gi.ratio}, media=${gi.media?.url || 'none'}`);
      });
    });
  } catch (err) {
    console.error("Fetch error:", err.message);
  }
}

testProjectDetail();
