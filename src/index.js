import glob from 'glob';
import HtmlWebpackPlugin from 'html-webpack-plugin';


export default ({
  base=`./src`,
  custom=[]
} = {})  => {

  let files = glob.sync(`${base}/**/*.html`);

  const entry = [...files];

  //exclude custom with no filename or template path
  custom = custom.filter(c => {
    return c && c.filename && c.template;
  });

  //filter all files with a custom plugin (custom)
  files = files.filter(f => {
    return !custom.find(c => c.template === f);
  });

  //map all custom objects to plugins
  custom = custom.map(p => new HtmlWebpackPlugin(p));

  //map all found & filtered html files to plugins
  let plugins = files.map(template => {
    return new HtmlWebpackPlugin({
      template,
      filename: template.split(`${base}/`).join(``)
    });
  });

  return {entry, plugins: [...plugins, ...custom]};

};
