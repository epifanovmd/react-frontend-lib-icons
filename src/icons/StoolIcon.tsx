import React, { FC, memo } from 'react';
import StoolSvg from '../svg/stool.svg';

export interface IStoolIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StoolIcon: FC<IStoolIconProps> = memo(props => {
  return <StoolSvg {...props} />;
});
