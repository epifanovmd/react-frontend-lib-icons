import React, { FC, memo } from 'react';
import SignRealEstateSvg from '../svg/sign-real-estate.svg';

export interface ISignRealEstateIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SignRealEstateIcon: FC<ISignRealEstateIconProps> = memo(props => {
  return <SignRealEstateSvg {...props} />;
});
