import React, { FC, memo } from 'react';
import PandoraSvg from '../svg/pandora.svg';

export interface IPandoraIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PandoraIcon: FC<IPandoraIconProps> = memo(props => {
  return <PandoraSvg {...props} />;
});
