import React, { FC, memo } from 'react';
import KabaddiSvg from '../svg/kabaddi.svg';

export interface IKabaddiIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KabaddiIcon: FC<IKabaddiIconProps> = memo(props => {
  return <KabaddiSvg {...props} />;
});
