require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

# module DataBaseDesignSample
#   class Application < Rails::Application
module ChatSpace
  class Application < Rails::Application
    # ここから下を追加。チャット画面作成のため、いらない関連ファイル群を退ける、制約
    config.generators do |g|
      g.javascripts false
      g.helper false
      g.test_framework false
      g.coffee false
    end
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    config.i18n.default_locale = :ja
  end
end
