import React, { FC, memo } from 'react';
import SetTopBoxSvg from '../svg/set-top-box.svg';

export interface ISetTopBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SetTopBoxIcon: FC<ISetTopBoxIconProps> = memo(props => {
  return <SetTopBoxSvg {...props} />;
});
