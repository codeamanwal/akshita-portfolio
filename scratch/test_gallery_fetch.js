async function testGallery() {
  try {
    const res = await fetch("http://localhost:1337/api/images?populate=*&sort[0]=order:asc");
    const json = await res.json();
    console.log("STATUS:", res.status);
    console.log("TOTAL ENTRIES:", json.data?.length);
    json.data?.forEach((item) => {
      console.log(`\nEntry ID: ${item.id}, Slug: ${item.slug || 'N/A'}`);
      console.log(`Brand image: ${item.brand?.url || 'none'}`);
      console.log(`galleryImages count: ${item.galleryImages?.length || 0}`);
      item.galleryImages?.forEach((gi, idx) => {
        console.log(`  - GalleryItem #${idx + 1}: url=${gi.image?.url || 'none'}, ratio=${gi.ratio}, order=${gi.order}`);
      });
    });
  } catch (err) {
    console.error("Fetch error:", err.message);
  }
}

testGallery();
