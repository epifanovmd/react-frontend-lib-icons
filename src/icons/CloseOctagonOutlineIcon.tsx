import React, { FC, memo } from 'react';
import CloseOctagonOutlineSvg from '../svg/close-octagon-outline.svg';

export interface ICloseOctagonOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloseOctagonOutlineIcon: FC<ICloseOctagonOutlineIconProps> = memo(props => {
  return <CloseOctagonOutlineSvg {...props} />;
});
