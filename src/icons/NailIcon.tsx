import React, { FC, memo } from 'react';
import NailSvg from '../svg/nail.svg';

export interface INailIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NailIcon: FC<INailIconProps> = memo(props => {
  return <NailSvg {...props} />;
});
