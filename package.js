Package.describe({
    summary: "Simple white theme for Azimuth CMS (using Zurb Foundation)"
});

Package.on_use(function (api) {
  api.use(['zurb-foundation', 'less'], 'client');

  api.add_files([
    'theme/simpleWhite.less'
  ], 'client');
});

