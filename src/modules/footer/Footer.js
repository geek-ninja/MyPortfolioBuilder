function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="my-4 text-center text-lg font-normal text-gray-700 dark:text-gray-200">{`Copyright © ${year} Sanket Puhan, All Rights Reserved`}</div>
  )
}

export default Footer