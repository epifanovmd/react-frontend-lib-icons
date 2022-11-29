import React, { FC, memo } from 'react';
import IdentifierSvg from '../svg/identifier.svg';

export interface IIdentifierIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const IdentifierIcon: FC<IIdentifierIconProps> = memo(props => {
  return <IdentifierSvg {...props} />;
});
