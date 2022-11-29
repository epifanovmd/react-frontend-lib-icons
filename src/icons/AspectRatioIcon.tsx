import React, { FC, memo } from 'react';
import AspectRatioSvg from '../svg/aspect-ratio.svg';

export interface IAspectRatioIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AspectRatioIcon: FC<IAspectRatioIconProps> = memo(props => {
  return <AspectRatioSvg {...props} />;
});
