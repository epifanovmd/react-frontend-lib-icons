import React, { FC, memo } from 'react';
import InformationVariantSvg from '../svg/information-variant.svg';

export interface IInformationVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const InformationVariantIcon: FC<IInformationVariantIconProps> = memo(props => {
  return <InformationVariantSvg {...props} />;
});
