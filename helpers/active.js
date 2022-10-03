class Active {
  constructor(actives) {
    this.main = actives.main || "";
    this.users = actives.users || "";
    this.jobs = actives.jobs || "";
    this.contacts = actives.contacts || "";
    this.gallery = actives.gallery || "";
    this.posts = actives.posts || "";
  }
}
module.exports = Active;
