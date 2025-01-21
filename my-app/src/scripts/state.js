import { useState } from 'react';

var InterfaceComponent = React.createClass({
    getInitialState : function() {
      return {
        name : "chris",
        job  : "developer"
      };
    },
    render : function() {
      return <div>
        My name is {this.state.name}
        and I am a {this.state.job}.
      </div>;
    }
  });
  
  React.renderComponent(
    <InterfaceComponent />,
    document.body
  );
function Example() {
  const [count, setCount] = useState(0);


const Example = (props) => {

    return <div />;
  }

  function Example(props) {
    return <div />;
  }

}

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: path.resolve(__dirname, './public/index.html'),
    filename: 'index.html',
    inject: 'body',
  })

module.exports = {
    entry: path.join(__dirname, 'index.web.js'),
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, '/build'),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules\/(?!()\/).*/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
      ],
    },
    plugins: [HTMLWebpackPluginConfig],
    devServer: {
      historyApiFallback: true,
      contentBase: './',
      hot: true,
    },
  }