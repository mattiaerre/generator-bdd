const generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  'install-dev-dependencies': function install() {
    this.npmInstall(['mocha', 'chai', 'sinon', 'istanbul', 'chance'], { saveDev: true });
  },
  'copy-templates': function copy() {
    this.fs.copy(
      this.templatePath('greeter.js'),
      this.destinationPath('greeter.js')
    );

    this.fs.copy(
      this.templatePath('test/greeter.spec.js'),
      this.destinationPath('test/greeter.spec.js')
    );
  },
  'update-package.json': function copy() {
    const template = this.fs.readJSON(this.templatePath('package.json')).scripts;
    const destination = this.fs.readJSON(this.destinationPath('package.json'));
    if (destination) {
      destination.scripts.coverage = template.coverage;
      destination.scripts.test = template.test;
      this.fs.writeJSON(this.destinationPath('package.json'), destination);
    }
  },
  end: function end() {
    this.spawnCommand('npm', ['run', 'coverage']);
  },
});
