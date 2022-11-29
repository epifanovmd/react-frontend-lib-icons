import React, { FC, memo } from 'react';
import NoodlesSvg from '../svg/noodles.svg';

export interface INoodlesIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NoodlesIcon: FC<INoodlesIconProps> = memo(props => {
  return <NoodlesSvg {...props} />;
});
