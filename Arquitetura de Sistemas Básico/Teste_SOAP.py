from zeep import Client

client = Client('http://www.soapclient.com/xml/soapresponder.wsdl')
resultado = client.service.Method1(bstrParam1='Luiza',bstrParam2='Rafael')
print(resultado)


