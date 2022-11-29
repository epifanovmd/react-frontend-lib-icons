import React, { FC, memo } from 'react';
import MaterialUiSvg from '../svg/material-ui.svg';

export interface IMaterialUiIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MaterialUiIcon: FC<IMaterialUiIconProps> = memo(props => {
  return <MaterialUiSvg {...props} />;
});
