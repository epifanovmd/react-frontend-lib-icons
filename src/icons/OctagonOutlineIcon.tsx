import React, { FC, memo } from 'react';
import OctagonOutlineSvg from '../svg/octagon-outline.svg';

export interface IOctagonOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OctagonOutlineIcon: FC<IOctagonOutlineIconProps> = memo(props => {
  return <OctagonOutlineSvg {...props} />;
});
