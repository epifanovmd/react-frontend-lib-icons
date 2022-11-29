import React, { FC, memo } from 'react';
import BorderVerticalSvg from '../svg/border-vertical.svg';

export interface IBorderVerticalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BorderVerticalIcon: FC<IBorderVerticalIconProps> = memo(props => {
  return <BorderVerticalSvg {...props} />;
});
