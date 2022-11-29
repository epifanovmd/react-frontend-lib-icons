import React, { FC, memo } from 'react';
import TeaSvg from '../svg/tea.svg';

export interface ITeaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TeaIcon: FC<ITeaIconProps> = memo(props => {
  return <TeaSvg {...props} />;
});
