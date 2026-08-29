async function checkServers() {
  try {
    const frontendRes = await fetch("http://localhost:3000");
    console.log("Frontend (localhost:3000) Status:", frontendRes.status);
  } catch (err) {
    console.log("Frontend Status: ERROR -", err.message);
  }

  try {
    const cmsRes = await fetch("http://localhost:1337/_health");
    console.log("Strapi CMS (localhost:1337/_health) Status:", cmsRes.status);
  } catch (err) {
    console.log("CMS Status: ERROR -", err.message);
  }
}

checkServers();
