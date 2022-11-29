import React, { FC, memo } from 'react';
import SetAllSvg from '../svg/set-all.svg';

export interface ISetAllIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SetAllIcon: FC<ISetAllIconProps> = memo(props => {
  return <SetAllSvg {...props} />;
});
