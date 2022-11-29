import React, { FC, memo } from 'react';
import ClippySvg from '../svg/clippy.svg';

export interface IClippyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClippyIcon: FC<IClippyIconProps> = memo(props => {
  return <ClippySvg {...props} />;
});
