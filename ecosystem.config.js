module.exports = {
    apps: [{
        name: 'Ace',
        script: 'server.js',
        autorestart: true,
        watch: true,
        ignore_watch: [".git", "**/node_modules/**", "assets", "dist"],
        watch_options: {
            followSymlinks: false,
            persistent: true,
            // usePolling: true,
            ignoreInitial: true
        },
        max_memory_restart: '1G',
        log_date_format: "YYYY-MM-DD HH:mm:ss.SSS",
    }]
};