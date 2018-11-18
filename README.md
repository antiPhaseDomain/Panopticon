# Panopticon
We're Watching You

Panopticon allows [Silence](https://github.com/antiPhaseDomain/Silence) to support its [feature](https://github.com/antiPhaseDomain/Silence/blob/master/README.md#verified-features) set.

Saves all compiled files into `{Project Name}/assets/legacy`

## Changing Projects 


Edit the [package.json](https://github.com/antiPhaseDomain/Panopticon/blob/master/package.json#L11) file and change both "build" and "serve" script runners to build and serve your project's folder. 

I'm pretty sure you can just add the filenames to `npm start`, but I have yet to try it out.
