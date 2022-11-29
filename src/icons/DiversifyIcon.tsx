import React, { FC, memo } from 'react';
import DiversifySvg from '../svg/diversify.svg';

export interface IDiversifyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DiversifyIcon: FC<IDiversifyIconProps> = memo(props => {
  return <DiversifySvg {...props} />;
});
