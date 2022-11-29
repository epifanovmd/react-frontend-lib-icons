import React, { FC, memo } from 'react';
import LeafOffSvg from '../svg/leaf-off.svg';

export interface ILeafOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LeafOffIcon: FC<ILeafOffIconProps> = memo(props => {
  return <LeafOffSvg {...props} />;
});
