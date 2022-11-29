import React, { FC, memo } from 'react';
import ButtonCursorSvg from '../svg/button-cursor.svg';

export interface IButtonCursorIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ButtonCursorIcon: FC<IButtonCursorIconProps> = memo(props => {
  return <ButtonCursorSvg {...props} />;
});
