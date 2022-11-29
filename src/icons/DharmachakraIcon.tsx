import React, { FC, memo } from 'react';
import DharmachakraSvg from '../svg/dharmachakra.svg';

export interface IDharmachakraIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DharmachakraIcon: FC<IDharmachakraIconProps> = memo(props => {
  return <DharmachakraSvg {...props} />;
});
