import React, { FC, memo } from 'react';
import SetNoneSvg from '../svg/set-none.svg';

export interface ISetNoneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SetNoneIcon: FC<ISetNoneIconProps> = memo(props => {
  return <SetNoneSvg {...props} />;
});
