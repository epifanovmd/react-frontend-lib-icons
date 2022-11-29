import React, { FC, memo } from 'react';
import ClosedCaptionOutlineSvg from '../svg/closed-caption-outline.svg';

export interface IClosedCaptionOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClosedCaptionOutlineIcon: FC<IClosedCaptionOutlineIconProps> = memo(props => {
  return <ClosedCaptionOutlineSvg {...props} />;
});
