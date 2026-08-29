async function testParamsPopulate() {
  const url = `http://localhost:1337/api/project-details?populate[hero]=true&populate[heroMobile]=true&populate[gallery]=true&populate[galleryMobile]=true&populate[galleryItems][populate][image]=true&populate[galleryItems][populate][imageMobile]=true`;
  console.log("URL:", url);

  try {
    const res = await fetch(url);
    console.log("STATUS:", res.status);
    const json = await res.json();
    console.log("RESPONSE JSON:", JSON.stringify(json, null, 2));
  } catch (err) {
    console.error("Error:", err.message);
  }
}

testParamsPopulate();
