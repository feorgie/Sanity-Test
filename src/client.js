import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "klr5cwo5", // find this at manage.sanity.io or in your sanity.json
  dataset: "blog-data", // this is from those question during 'sanity init'
  useCdn: true,
});
