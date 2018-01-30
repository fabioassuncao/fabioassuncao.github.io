# #!/bin/sh
# git subtree split --prefix dist -b master # create a local master branch containing the splitted output folder
# git push -f origin master:master # force the push of the master branch to the remote master branch at origin
# git branch -D master # delete the local master because you will need it: ref

if [ -z "$1" ]
then
  echo "Which folder do you want to deploy to GitHub Pages?"
  exit 1
fi
git subtree push --prefix $1 origin gh-pages