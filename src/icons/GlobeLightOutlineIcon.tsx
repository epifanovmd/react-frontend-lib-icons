import React, { FC, memo } from 'react';
import GlobeLightOutlineSvg from '../svg/globe-light-outline.svg';

export interface IGlobeLightOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GlobeLightOutlineIcon: FC<IGlobeLightOutlineIconProps> = memo(props => {
  return <GlobeLightOutlineSvg {...props} />;
});
