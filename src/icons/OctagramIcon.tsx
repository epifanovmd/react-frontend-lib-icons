import React, { FC, memo } from 'react';
import OctagramSvg from '../svg/octagram.svg';

export interface IOctagramIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OctagramIcon: FC<IOctagramIconProps> = memo(props => {
  return <OctagramSvg {...props} />;
});
