import React, { FC, memo } from 'react';
import DeviantartSvg from '../svg/deviantart.svg';

export interface IDeviantartIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DeviantartIcon: FC<IDeviantartIconProps> = memo(props => {
  return <DeviantartSvg {...props} />;
});
