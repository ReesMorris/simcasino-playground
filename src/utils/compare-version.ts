import config from '../config.json';

export enum riskFactor {
  None,
  Minor,
  Major,
  Patch
}

const compareVersion = (version: string): riskFactor => {
  const [currMajor, currMinor, currPatch] = version.split('.');
  const [
    verifiedMajor,
    verifiedMinor,
    verifiedPatch
  ] = config.last_verified_version.split('.');

  if (currMajor !== verifiedMajor) return riskFactor.Major;
  if (currMinor !== verifiedMinor) return riskFactor.Minor;
  if (currPatch !== verifiedPatch) return riskFactor.Patch;
  return riskFactor.None;
};

export default compareVersion;
