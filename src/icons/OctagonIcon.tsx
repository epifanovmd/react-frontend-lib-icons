import React, { FC, memo } from 'react';
import OctagonSvg from '../svg/octagon.svg';

export interface IOctagonIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OctagonIcon: FC<IOctagonIconProps> = memo(props => {
  return <OctagonSvg {...props} />;
});
