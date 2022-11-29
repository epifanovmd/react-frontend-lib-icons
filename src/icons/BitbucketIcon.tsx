import React, { FC, memo } from 'react';
import BitbucketSvg from '../svg/bitbucket.svg';

export interface IBitbucketIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BitbucketIcon: FC<IBitbucketIconProps> = memo(props => {
  return <BitbucketSvg {...props} />;
});
