import sdk from '@stackblitz/sdk';
import './styles.css';

// Откройте репозиторий RealWorld Angular в новом окне на StackBlitz
// https://github.com/gothinkster/angular-realworld-example-app
// https://github.com/warsan/github-veter
window['openGithubProject'] = () => {
  sdk.openGithubProject('warsan/github-veter');
}

// Вставьте репозиторий RealWorld Angular на эту страницу
window['embedGithubProject'] = () => {
  sdk.embedGithubProject(
    'myDiv',
    'warsan/github-veter',
    { height: 600 }
  );
}
