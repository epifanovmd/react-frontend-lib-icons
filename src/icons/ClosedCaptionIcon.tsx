import React, { FC, memo } from 'react';
import ClosedCaptionSvg from '../svg/closed-caption.svg';

export interface IClosedCaptionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClosedCaptionIcon: FC<IClosedCaptionIconProps> = memo(props => {
  return <ClosedCaptionSvg {...props} />;
});
