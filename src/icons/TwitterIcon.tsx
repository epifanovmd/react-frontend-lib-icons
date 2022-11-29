import React, { FC, memo } from 'react';
import TwitterSvg from '../svg/twitter.svg';

export interface ITwitterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TwitterIcon: FC<ITwitterIconProps> = memo(props => {
  return <TwitterSvg {...props} />;
});
